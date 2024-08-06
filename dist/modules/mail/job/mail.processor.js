"use strict";
var MailProcessor_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailProcessor = void 0;
const tslib_1 = require("tslib");
const bull_1 = require("@nestjs/bull");
const common_1 = require("@nestjs/common");
const mail_service_1 = require("../mail.service");
let MailProcessor = MailProcessor_1 = class MailProcessor {
    constructor() {
        this.logger = new common_1.Logger(MailProcessor_1.name);
    }
    async sendForgotPasswordEmail(job) {
        this.logger.debug('Start job: sendForgotPasswordEmail');
        const { email } = job.data;
        try {
            await this.mailService.sendForgotPasswordEmail(email);
        }
        catch (e) {
            this.logger.debug(e);
        }
        this.logger.debug('Done job: sendForgotPasswordEmail');
        return 1;
    }
    async sendSignUpEmail(job) {
        this.logger.debug('Start job: sendSignUpEmail');
        try {
            await this.mailService.sendSignUpEmail(job.data);
        }
        catch (e) {
            this.logger.debug(e);
        }
        this.logger.debug('Done job: sendSignUpEmail');
        return 1;
    }
};
tslib_1.__decorate([
    common_1.Inject(common_1.forwardRef(() => mail_service_1.MailService)),
    tslib_1.__metadata("design:type", mail_service_1.MailService)
], MailProcessor.prototype, "mailService", void 0);
tslib_1.__decorate([
    bull_1.Process('sendForgotPasswordEmail'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MailProcessor.prototype, "sendForgotPasswordEmail", null);
tslib_1.__decorate([
    bull_1.Process('sendSignUpEmail'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MailProcessor.prototype, "sendSignUpEmail", null);
MailProcessor = MailProcessor_1 = tslib_1.__decorate([
    bull_1.Processor('mail')
], MailProcessor);
exports.MailProcessor = MailProcessor;
//# sourceMappingURL=mail.processor.js.map