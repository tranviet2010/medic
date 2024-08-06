"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUsersDto = void 0;
const tslib_1 = require("tslib");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const transforms_decorator_1 = require("../../../shares/decorators/transforms.decorator");
const pagination_dto_1 = require("../../../shares/dtos/pagination.dto");
class GetUsersDto extends pagination_dto_1.PaginationDto {
}
tslib_1.__decorate([
    swagger_1.ApiProperty({ required: false }),
    class_validator_1.IsOptional(),
    class_validator_1.IsMongoId(),
    transforms_decorator_1.Trim(),
    tslib_1.__metadata("design:type", String)
], GetUsersDto.prototype, "id", void 0);
tslib_1.__decorate([
    swagger_1.ApiProperty({ required: false }),
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], GetUsersDto.prototype, "name", void 0);
exports.GetUsersDto = GetUsersDto;
//# sourceMappingURL=get-users.dto.js.map