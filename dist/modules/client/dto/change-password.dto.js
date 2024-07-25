"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangePasswordDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const transforms_decorator_1 = require("../../../shares/decorators/transforms.decorator");
class ChangePasswordDto {
}
tslib_1.__decorate([
    class_validator_1.IsDefined(),
    transforms_decorator_1.Trim(),
    transforms_decorator_1.ToLowerCase(),
    class_validator_1.IsEmail(),
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], ChangePasswordDto.prototype, "email", void 0);
tslib_1.__decorate([
    class_validator_1.IsDefined(),
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], ChangePasswordDto.prototype, "password", void 0);
tslib_1.__decorate([
    class_validator_1.IsDefined(),
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], ChangePasswordDto.prototype, "newPassword", void 0);
exports.ChangePasswordDto = ChangePasswordDto;
exports.default = ChangePasswordDto;
//# sourceMappingURL=change-password.dto.js.map