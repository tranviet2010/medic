"use strict";
var MailConsole_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailConsole = void 0;
const tslib_1 = require("tslib");
const mailer_1 = require("@nestjs-modules/mailer");
const common_1 = require("@nestjs/common");
const config = require("config");
const nestjs_console_1 = require("nestjs-console");
const mail_service_1 = require("./mail.service");
const mailFrom = config.get('mail.from');
let MailConsole = MailConsole_1 = class MailConsole {
    constructor(mailerService, mailService, logger) {
        this.mailerService = mailerService;
        this.mailService = mailService;
        this.logger = logger;
        this.logger.setContext(MailConsole_1.name);
    }
    async sendMail(email, subject, body) {
        await this.mailerService.sendMail({
            from: `"No Reply" <${mailFrom}>`,
            to: email,
            subject: 'Pet - Notification',
            template: 'src/modules/mail/templates/sign-up.hbs',
            context: {
                email,
                code: '123456',
                title: subject,
                message: body,
            },
        });
    }
};
tslib_1.__decorate([
    nestjs_console_1.Command({
        command: 'send-mail <email> <subject> <body>',
        description: 'Send test email',
    }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String, String]),
    tslib_1.__metadata("design:returntype", Promise)
], MailConsole.prototype, "sendMail", null);
MailConsole = MailConsole_1 = tslib_1.__decorate([
    nestjs_console_1.Console(),
    common_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [mailer_1.MailerService,
        mail_service_1.MailService,
        common_1.Logger])
], MailConsole);
exports.MailConsole = MailConsole;
//# sourceMappingURL=mail.console.js.map