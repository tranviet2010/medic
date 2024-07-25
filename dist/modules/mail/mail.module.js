"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailModule = void 0;
const tslib_1 = require("tslib");
const mailer_1 = require("@nestjs-modules/mailer");
const handlebars_adapter_1 = require("@nestjs-modules/mailer/dist/adapters/handlebars.adapter");
const common_1 = require("@nestjs/common");
const path_1 = require("path");
const bull_1 = require("@nestjs/bull");
const configs_1 = require("../../configs");
const mail_processor_1 = require("./job/mail.processor");
const mail_console_1 = require("./mail.console");
const mail_service_1 = require("./mail.service");
const config = require("config");
const redisStore = require("cache-manager-redis-store");
const redis_config_1 = require("../../configs/redis.config");
const mailHost = config.get('mail.host');
const mailPort = config.get('mail.port');
const mailAccount = config.get('mail.account');
const mailPassword = config.get('mail.password');
const mailFrom = configs_1.getConfig().get('mail.from');
const isQueueEnabled = true;
const bullOptions = {
    name: 'mail',
};
if (!isQueueEnabled) {
    bullOptions['processors'] = [];
}
let MailModule = class MailModule {
};
MailModule = tslib_1.__decorate([
    common_1.Module({
        imports: [
            mailer_1.MailerModule.forRoot({
                transport: {
                    host: mailHost,
                    port: mailPort,
                    secure: true,
                    auth: {
                        user: mailAccount,
                        pass: mailPassword,
                    },
                },
                defaults: {
                    from: `"No Reply" <${mailFrom}>`,
                },
                template: {
                    dir: path_1.join(__dirname, 'templates'),
                    adapter: new handlebars_adapter_1.HandlebarsAdapter(),
                    options: {
                        strict: true,
                    },
                },
            }),
            bull_1.BullModule.registerQueue(bullOptions),
            common_1.CacheModule.register(Object.assign(Object.assign({ store: redisStore }, redis_config_1.redisConfig), { isGlobal: true })),
        ],
        providers: [mail_service_1.MailService, mail_processor_1.MailProcessor, mail_console_1.MailConsole, common_1.Logger],
        exports: [mail_service_1.MailService],
    })
], MailModule);
exports.MailModule = MailModule;
//# sourceMappingURL=mail.module.js.map