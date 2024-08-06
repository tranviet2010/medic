"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const tslib_1 = require("tslib");
const get_current_user_decorators_1 = require("../../shares/decorators/get-current-user.decorators");
const common_1 = require("@nestjs/common");
const response_login_dto_1 = require("./dto/response-login.dto");
const get_user_id_decorator_1 = require("../../shares/decorators/get-user-id.decorator");
const payload_refresh_token_dto_1 = require("./dto/payload-refresh-token.dto");
const auth_service_1 = require("./auth.service");
const login_dto_1 = require("./dto/login.dto");
const swagger_1 = require("@nestjs/swagger");
const user_service_1 = require("../user/user.service");
const client_rt_guard_1 = require("./guards/client-rt.guard");
const http_decorators_1 = require("../../shares/decorators/http.decorators");
let AuthController = class AuthController {
    constructor(authService, userService) {
        this.authService = authService;
        this.userService = userService;
    }
    async currentUser(userId) {
        return this.userService.findById(userId);
    }
    async userLogin(loginDto) {
        return this.authService.userLogin(loginDto);
    }
    async userRefreshAccessToken(user) {
        return this.authService.UserGetAccessToken(user);
    }
};
tslib_1.__decorate([
    common_1.Get('user/current'),
    http_decorators_1.UserAuth(),
    swagger_1.ApiOperation({ summary: '[ User ] Get access token info' }),
    tslib_1.__param(0, get_user_id_decorator_1.UserID()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthController.prototype, "currentUser", null);
tslib_1.__decorate([
    common_1.Post('user/login'),
    swagger_1.ApiOperation({ summary: '[ User ] Login with gmail' }),
    tslib_1.__param(0, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [login_dto_1.LoginDto]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthController.prototype, "userLogin", null);
tslib_1.__decorate([
    common_1.Post('user/refresh-access-token'),
    swagger_1.ApiOperation({ summary: '[ User ] Get new Access Token' }),
    common_1.UseGuards(client_rt_guard_1.ClientRtGuards),
    tslib_1.__param(0, get_current_user_decorators_1.GetCurrentUser()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [payload_refresh_token_dto_1.PayloadRefreshTokenDto]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthController.prototype, "userRefreshAccessToken", null);
AuthController = tslib_1.__decorate([
    common_1.Controller('auth'),
    swagger_1.ApiTags('Auth'),
    swagger_1.ApiBearerAuth(),
    tslib_1.__metadata("design:paramtypes", [auth_service_1.AuthService,
        user_service_1.UserService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map