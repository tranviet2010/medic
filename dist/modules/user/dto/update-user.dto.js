"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserDto = void 0;
const tslib_1 = require("tslib");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class UpdateUserDto {
}
tslib_1.__decorate([
    swagger_1.ApiProperty({ default: 'John Doe' }),
    class_validator_1.IsString(),
    class_validator_1.IsOptional(),
    class_validator_1.MaxLength(30),
    tslib_1.__metadata("design:type", String)
], UpdateUserDto.prototype, "name", void 0);
tslib_1.__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsEmail(),
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", String)
], UpdateUserDto.prototype, "email", void 0);
tslib_1.__decorate([
    swagger_1.ApiProperty({ default: 'https://resq-bucket-2.s3.amazonaws.com/test/1681115579264_c49717abc07d480.jpeg' }),
    class_validator_1.IsOptional(),
    class_validator_1.IsNumber(),
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], UpdateUserDto.prototype, "image_url", void 0);
exports.UpdateUserDto = UpdateUserDto;
//# sourceMappingURL=update-user.dto.js.map