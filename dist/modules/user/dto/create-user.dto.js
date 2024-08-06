"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserDto = void 0;
const tslib_1 = require("tslib");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const user_enum_1 = require("../../../shares/enums/user.enum");
class CreateUserDto {
}
tslib_1.__decorate([
    swagger_1.ApiProperty({
        required: true,
        example: 'user@gmail.com',
    }),
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
tslib_1.__decorate([
    swagger_1.ApiProperty({ required: true }),
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", Array)
], CreateUserDto.prototype, "role", void 0);
tslib_1.__decorate([
    swagger_1.ApiProperty({
        required: true,
        example: '123456789',
    }),
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
tslib_1.__decorate([
    swagger_1.ApiProperty({
        required: true,
        example: 'john wick',
    }),
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", String)
], CreateUserDto.prototype, "name", void 0);
exports.CreateUserDto = CreateUserDto;
//# sourceMappingURL=create-user.dto.js.map