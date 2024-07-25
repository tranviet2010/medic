"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailService = void 0;
const tslib_1 = require("tslib");
const mailer_1 = require("@nestjs-modules/mailer");
const common_1 = require("@nestjs/common");
const bull_1 = require("@nestjs/bull");
const config = require("config");
const utils_1 = require("../../shares/helpers/utils");
const auth_constants_1 = require("../auth/auth.constants");
const mailFrom = config.get('mail.from');
let MailService = class MailService {
    constructor(mailerService, queue, cacheManager) {
        this.mailerService = mailerService;
        this.queue = queue;
        this.cacheManager = cacheManager;
    }
    async sendForgotPasswordEmailJob(email) {
        await this.queue.add('sendForgotPasswordEmail', {
            email,
        });
    }
    async sendForgotPasswordEmail(email) {
        const code = utils_1.randomCodeNumber(6);
        await this.mailerService.sendMail({
            to: email,
            from: `"Support Team" <${mailFrom}>`,
            subject: 'PET SHOP - RESET PASSWORD',
            template: 'src/modules/mail/templates/forgot-password.hbs',
            context: {
                email,
                code,
                supportEmail: mailFrom,
            },
        });
        const cacheInfo = {
            code,
            attempt: 0,
        };
        await this.cacheManager.set(`${auth_constants_1.FORGOT_PASSWORD_CACHE}${email}`, JSON.stringify(cacheInfo), {
            ttl: auth_constants_1.FORGOT_PASSWORD_EXPIRY,
        });
    }
    async sendSignUpEmailJob(signUpInterface) {
        await this.queue.add('sendSignUpEmail', signUpInterface);
    }
    async sendSignUpEmail(signUpInterface) {
        const { email, code } = signUpInterface;
        await this.mailerService.sendMail({
            to: email,
            from: `"Support Team" <${mailFrom}>`,
            subject: 'PET SHOP - NEW SIGN-UP TO EXCLUSIVE ACCESS',
            template: 'src/modules/mail/templates/sign-up.hbs',
            context: {
                email,
                code,
                supportEmail: mailFrom,
            },
        });
        const SignUpInfoCache = Object.assign(Object.assign({}, signUpInterface), { attempt: 0 });
        await this.cacheManager.set(`${auth_constants_1.SIGN_UP_CACHE}${email}`, JSON.stringify(SignUpInfoCache), {
            ttl: auth_constants_1.SIGN_UP_EXPIRY,
        });
    }
};
MailService = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__param(1, bull_1.InjectQueue('mail')),
    tslib_1.__param(2, common_1.Inject(common_1.CACHE_MANAGER)),
    tslib_1.__metadata("design:paramtypes", [mailer_1.MailerService, Object, Object])
], MailService);
exports.MailService = MailService;
//# sourceMappingURL=mail.service.js.map