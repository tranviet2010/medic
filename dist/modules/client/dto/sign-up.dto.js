"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignUpDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class SignUpDto {
}
tslib_1.__decorate([
    swagger_1.ApiProperty({
        required: true,
        example: 'john.doe@example.com',
    }),
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", String)
], SignUpDto.prototype, "email", void 0);
tslib_1.__decorate([
    swagger_1.ApiProperty({
        required: true,
        example: '123456789',
    }),
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", String)
], SignUpDto.prototype, "password", void 0);
tslib_1.__decorate([
    swagger_1.ApiProperty({
        required: false,
        example: 'john wick',
    }),
    class_validator_1.IsOptional(),
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", String)
], SignUpDto.prototype, "name", void 0);
tslib_1.__decorate([
    swagger_1.ApiProperty({
        required: false,
    }),
    class_validator_1.IsOptional(),
    class_validator_1.IsDate(),
    tslib_1.__metadata("design:type", Date)
], SignUpDto.prototype, "birthday", void 0);
tslib_1.__decorate([
    swagger_1.ApiProperty({
        required: false,
    }),
    class_validator_1.IsOptional(),
    class_validator_1.IsNumber(),
    tslib_1.__metadata("design:type", Number)
], SignUpDto.prototype, "gender", void 0);
exports.SignUpDto = SignUpDto;
//# sourceMappingURL=sign-up.dto.js.map