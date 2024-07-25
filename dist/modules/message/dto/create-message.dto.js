"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMessageDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
class CreateMessageDto {
}
tslib_1.__decorate([
    class_validator_1.IsDefined(),
    class_validator_1.IsMongoId(),
    tslib_1.__metadata("design:type", String)
], CreateMessageDto.prototype, "sender_id", void 0);
tslib_1.__decorate([
    class_validator_1.IsDefined(),
    class_validator_1.IsMongoId(),
    tslib_1.__metadata("design:type", String)
], CreateMessageDto.prototype, "conversation_id", void 0);
exports.CreateMessageDto = CreateMessageDto;
//# sourceMappingURL=create-message.dto.js.map