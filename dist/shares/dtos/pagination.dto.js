"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResPagingDto = exports.PaginationDto = void 0;
const tslib_1 = require("tslib");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class PaginationDto {
    constructor() {
        this.sort = -1;
        this.page = 1;
        this.limit = 10;
    }
}
tslib_1.__decorate([
    swagger_1.ApiPropertyOptional({
        required: true,
        example: 1,
        description: '',
    }),
    class_transformer_1.Transform(({ value }) => Number(value)),
    class_validator_1.IsOptional(),
    class_validator_1.IsIn([1, -1]),
    tslib_1.__metadata("design:type", Number)
], PaginationDto.prototype, "sort", void 0);
tslib_1.__decorate([
    swagger_1.ApiPropertyOptional({ example: 1 }),
    class_transformer_1.Transform(({ value }) => Number(value)),
    class_validator_1.IsInt(),
    class_validator_1.IsPositive(),
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", Number)
], PaginationDto.prototype, "page", void 0);
tslib_1.__decorate([
    swagger_1.ApiPropertyOptional({ example: 10 }),
    class_transformer_1.Transform(({ value }) => Number(value)),
    class_validator_1.IsInt(),
    class_validator_1.Max(100),
    class_validator_1.IsPositive(),
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", Number)
], PaginationDto.prototype, "limit", void 0);
exports.PaginationDto = PaginationDto;
class ResPagingDto {
}
exports.ResPagingDto = ResPagingDto;
//# sourceMappingURL=pagination.dto.js.map