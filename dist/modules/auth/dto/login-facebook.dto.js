"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginFacebookDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class LoginFacebookDto {
}
tslib_1.__decorate([
    swagger_1.ApiProperty({ description: 'Facebook access_token' }),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], LoginFacebookDto.prototype, "accessToken", void 0);
exports.LoginFacebookDto = LoginFacebookDto;
//# sourceMappingURL=login-facebook.dto.js.map