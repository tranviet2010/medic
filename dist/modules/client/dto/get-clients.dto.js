"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetClientByPhoneOrderDto = exports.GetClientsDto = void 0;
const tslib_1 = require("tslib");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const transforms_decorator_1 = require("../../../shares/decorators/transforms.decorator");
const pagination_dto_1 = require("../../../shares/dtos/pagination.dto");
class GetClientsDto extends pagination_dto_1.PaginationDto {
}
tslib_1.__decorate([
    swagger_1.ApiProperty({ required: false, type: String }),
    class_validator_1.IsOptional(),
    class_validator_1.IsMongoId(),
    transforms_decorator_1.Trim(),
    tslib_1.__metadata("design:type", String)
], GetClientsDto.prototype, "id", void 0);
tslib_1.__decorate([
    swagger_1.ApiProperty({ required: false }),
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], GetClientsDto.prototype, "name", void 0);
tslib_1.__decorate([
    swagger_1.ApiProperty({ required: false }),
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], GetClientsDto.prototype, "phone", void 0);
tslib_1.__decorate([
    swagger_1.ApiProperty({ required: false }),
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], GetClientsDto.prototype, "code", void 0);
tslib_1.__decorate([
    swagger_1.ApiProperty({ required: false }),
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], GetClientsDto.prototype, "pancake", void 0);
tslib_1.__decorate([
    swagger_1.ApiProperty({ required: false }),
    class_validator_1.IsOptional(),
    class_validator_1.IsEmail(),
    tslib_1.__metadata("design:type", String)
], GetClientsDto.prototype, "email", void 0);
exports.GetClientsDto = GetClientsDto;
class GetClientByPhoneOrderDto extends pagination_dto_1.PaginationDto {
}
tslib_1.__decorate([
    swagger_1.ApiProperty({ required: false }),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], GetClientByPhoneOrderDto.prototype, "phone", void 0);
exports.GetClientByPhoneOrderDto = GetClientByPhoneOrderDto;
//# sourceMappingURL=get-clients.dto.js.map