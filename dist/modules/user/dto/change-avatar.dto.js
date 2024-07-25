"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeAvatarDto = void 0;
const tslib_1 = require("tslib");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ChangeAvatarDto {
}
tslib_1.__decorate([
    swagger_1.ApiProperty({ default: 1 }),
    class_validator_1.IsNumber(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.Min(0),
    tslib_1.__metadata("design:type", Number)
], ChangeAvatarDto.prototype, "avatarId", void 0);
exports.ChangeAvatarDto = ChangeAvatarDto;
//# sourceMappingURL=change-avatar.dto.js.map