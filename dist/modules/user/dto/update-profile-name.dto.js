"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProfileNameDto = void 0;
const tslib_1 = require("tslib");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class UpdateProfileNameDto {
}
tslib_1.__decorate([
    swagger_1.ApiProperty({ default: 'No Name' }),
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.MaxLength(30),
    class_validator_1.MinLength(1),
    class_validator_1.Matches(/^([a-zA-Z0-9\-\_\.]+)$/),
    tslib_1.__metadata("design:type", String)
], UpdateProfileNameDto.prototype, "name", void 0);
exports.UpdateProfileNameDto = UpdateProfileNameDto;
//# sourceMappingURL=update-profile-name.dto.js.map