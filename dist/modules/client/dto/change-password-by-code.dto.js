"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangePasswordByCodeDto = void 0;
const tslib_1 = require("tslib");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const transforms_decorator_1 = require("../../../shares/decorators/transforms.decorator");
class ChangePasswordByCodeDto {
}
tslib_1.__decorate([
    swagger_1.ApiProperty({
        required: true,
        example: 'jonh@gmail.com',
    }),
    class_validator_1.IsDefined(),
    transforms_decorator_1.Trim(),
    transforms_decorator_1.ToLowerCase(),
    class_validator_1.IsEmail(),
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], ChangePasswordByCodeDto.prototype, "email", void 0);
tslib_1.__decorate([
    swagger_1.ApiProperty({
        required: true,
        example: '123456',
    }),
    class_validator_1.IsDefined(),
    class_validator_1.IsNumberString(),
    tslib_1.__metadata("design:type", String)
], ChangePasswordByCodeDto.prototype, "verifyCode", void 0);
tslib_1.__decorate([
    swagger_1.ApiProperty({
        required: true,
        example: '123456',
    }),
    class_validator_1.IsDefined(),
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], ChangePasswordByCodeDto.prototype, "password", void 0);
exports.ChangePasswordByCodeDto = ChangePasswordByCodeDto;
exports.default = ChangePasswordByCodeDto;
//# sourceMappingURL=change-password-by-code.dto.js.map