"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class UploadDto {
}
tslib_1.__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", String)
], UploadDto.prototype, "fileName", void 0);
exports.UploadDto = UploadDto;
//# sourceMappingURL=upload.dto.js.map