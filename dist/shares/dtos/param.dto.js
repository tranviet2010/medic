"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdsDto = exports.IdDto = void 0;
const tslib_1 = require("tslib");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class IdDto {
}
tslib_1.__decorate([
    swagger_1.ApiProperty({
        required: true,
    }),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsMongoId(),
    tslib_1.__metadata("design:type", String)
], IdDto.prototype, "id", void 0);
exports.IdDto = IdDto;
class IdsDto {
}
tslib_1.__decorate([
    swagger_1.ApiProperty({
        required: true,
        type: [String],
    }),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsArray(),
    tslib_1.__metadata("design:type", Array)
], IdsDto.prototype, "ids", void 0);
exports.IdsDto = IdsDto;
//# sourceMappingURL=param.dto.js.map