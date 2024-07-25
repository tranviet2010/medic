"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class GetUserDto {
}
tslib_1.__decorate([
    swagger_1.ApiProperty({
        description: 'User ID',
        example: '6440d750376fd29eb0a33c41',
    }),
    class_validator_1.IsMongoId(),
    tslib_1.__metadata("design:type", String)
], GetUserDto.prototype, "id", void 0);
tslib_1.__decorate([
    swagger_1.ApiProperty({
        required: true,
        example: 'Ha Noi',
    }),
    tslib_1.__metadata("design:type", String)
], GetUserDto.prototype, "address", void 0);
tslib_1.__decorate([
    swagger_1.ApiProperty({
        example: 'john.doe@example.com',
        description: 'The email address of the user',
        format: 'email',
    }),
    class_validator_1.IsEmail({}, { message: 'Invalid email address' }),
    tslib_1.__metadata("design:type", String)
], GetUserDto.prototype, "email", void 0);
exports.GetUserDto = GetUserDto;
//# sourceMappingURL=get-user.dto.js.map