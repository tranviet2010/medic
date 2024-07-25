"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginGoogleDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class LoginGoogleDto {
}
tslib_1.__decorate([
    swagger_1.ApiProperty({ description: 'Google access_token' }),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], LoginGoogleDto.prototype, "accessToken", void 0);
exports.LoginGoogleDto = LoginGoogleDto;
//# sourceMappingURL=login-google.dto.js.map