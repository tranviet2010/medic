"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignUpByCodeDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class SignUpByCodeDto {
}
tslib_1.__decorate([
    swagger_1.ApiProperty({
        required: true,
        example: 'john.doe@example.com',
    }),
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", String)
], SignUpByCodeDto.prototype, "email", void 0);
tslib_1.__decorate([
    swagger_1.ApiProperty({
        required: true,
        example: '123456',
    }),
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", String)
], SignUpByCodeDto.prototype, "code", void 0);
exports.SignUpByCodeDto = SignUpByCodeDto;
//# sourceMappingURL=sign-up-by-code.dto.js.map