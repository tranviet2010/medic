"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailService = void 0;
const tslib_1 = require("tslib");
const nodemailer_1 = require("nodemailer");
const common_1 = require("@nestjs/common");
const config = require("config");
const email = config.get('mail.account');
const password = config.get('mail.password');
let EmailService = class EmailService {
    async sendEmail(emailAddress, subject, htmlBody, from) {
        const transporter = nodemailer_1.default.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: email,
                pass: password,
            },
        });
        const info = await transporter.sendMail({
            from: from || 'Commerce',
            to: emailAddress,
            subject: subject,
            html: htmlBody,
        });
        return info.messageId;
    }
    async SESSendEmail(emailAddress, subject, htmlBody, from) {
        const params = {
            Source: from || email,
            Destination: {
                ToAddresses: [emailAddress],
            },
            Message: {
                Body: {
                    Html: {
                        Charset: 'UTF-8',
                        Data: htmlBody,
                    },
                },
                Subject: {
                    Charset: 'UTF-8',
                    Data: subject,
                },
            },
        };
    }
};
EmailService = tslib_1.__decorate([
    common_1.Injectable()
], EmailService);
exports.EmailService = EmailService;
//# sourceMappingURL=mail.helpers.js.map