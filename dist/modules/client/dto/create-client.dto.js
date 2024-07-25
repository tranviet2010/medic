"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateClientDto = void 0;
const tslib_1 = require("tslib");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateClientDto {
}
tslib_1.__decorate([
    swagger_1.ApiProperty({
        required: true,
        example: 'user@gmail.com',
    }),
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", String)
], CreateClientDto.prototype, "email", void 0);
tslib_1.__decorate([
    swagger_1.ApiProperty({
        required: false,
        example: '123',
    }),
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", String)
], CreateClientDto.prototype, "password", void 0);
tslib_1.__decorate([
    swagger_1.ApiProperty({
        required: true,
        example: 'john wick',
    }),
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", String)
], CreateClientDto.prototype, "name", void 0);
tslib_1.__decorate([
    swagger_1.ApiProperty({
        required: false,
    }),
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", Date)
], CreateClientDto.prototype, "birthday", void 0);
tslib_1.__decorate([
    swagger_1.ApiProperty({
        required: false,
    }),
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", Number)
], CreateClientDto.prototype, "gender", void 0);
tslib_1.__decorate([
    swagger_1.ApiProperty({
        required: false,
    }),
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", String)
], CreateClientDto.prototype, "full_name", void 0);
tslib_1.__decorate([
    swagger_1.ApiProperty({
        required: false,
    }),
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", String)
], CreateClientDto.prototype, "japanese_name", void 0);
tslib_1.__decorate([
    swagger_1.ApiProperty({
        required: false,
    }),
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", String)
], CreateClientDto.prototype, "method_contact", void 0);
tslib_1.__decorate([
    swagger_1.ApiProperty({
        required: false,
    }),
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", String)
], CreateClientDto.prototype, "pancake", void 0);
tslib_1.__decorate([
    swagger_1.ApiProperty({
        required: false,
    }),
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", String)
], CreateClientDto.prototype, "phone", void 0);
tslib_1.__decorate([
    swagger_1.ApiProperty({
        required: false,
    }),
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", Number)
], CreateClientDto.prototype, "status_mode", void 0);
exports.CreateClientDto = CreateClientDto;
//# sourceMappingURL=create-client.dto.js.map