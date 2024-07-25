"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForgotPasswordDto = void 0;
const tslib_1 = require("tslib");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const transforms_decorator_1 = require("../../../shares/decorators/transforms.decorator");
class ForgotPasswordDto {
}
tslib_1.__decorate([
    swagger_1.ApiProperty({
        required: true,
        example: 'nxphuongktvt@gmail.com',
    }),
    class_validator_1.IsDefined(),
    transforms_decorator_1.Trim(),
    transforms_decorator_1.ToLowerCase(),
    class_validator_1.IsEmail(),
    tslib_1.__metadata("design:type", String)
], ForgotPasswordDto.prototype, "email", void 0);
exports.ForgotPasswordDto = ForgotPasswordDto;
//# sourceMappingURL=forgot-password.dto.js.map