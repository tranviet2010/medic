"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const auth_constants_1 = require("./auth.constants");
const login_dto_1 = require("./dto/login.dto");
const response_login_dto_1 = require("./dto/response-login.dto");
const exceptions_1 = require("../../shares/exceptions");
const config = require("config");
const axios_1 = require("@nestjs/axios");
const bcrypt_1 = require("../../shares/helpers/bcrypt");
const payload_access_token_dto_1 = require("../../shares/dtos/payload-access-token.dto");
const user_service_1 = require("../user/user.service");
const baseFacebookUrl = config.get('facebook.graph_api');
const baseGoogleUrl = config.get('google.base_api');
let AuthService = class AuthService {
    constructor(userService, cacheManager, jwtService, httpService) {
        this.userService = userService;
        this.cacheManager = cacheManager;
        this.jwtService = jwtService;
        this.httpService = httpService;
    }
    async userLogin(loginDto) {
        const { email, password } = loginDto;
        const user = await this.userService.findOne({ email }, true);
        if (!user) {
            throw new common_1.BadRequestException(exceptions_1.httpErrors.ACCOUNT_NOT_FOUND);
        }
        if ((user === null || user === void 0 ? void 0 : user.password) != password) {
            throw new common_1.UnauthorizedException(exceptions_1.httpErrors.UNAUTHORIZED);
        }
        const [accessToken, refreshToken] = await Promise.all([
            this.generateUserAccessToken(user),
            this.generateUserRefreshToken(user),
        ]);
        return {
            accessToken,
            refreshToken,
            id: user._id,
            email: user.email,
            role: user.role,
            iat: Date.now(),
            exp: Date.now() + auth_constants_1.JWT_CONSTANTS.userAccessTokenExpiry,
        };
    }
    async UserGetAccessToken(payload) {
        const { userId, refreshToken } = payload;
        const [user, oldRefreshToken] = await Promise.all([
            this.userService.findById(userId.toString()),
            this.cacheManager.get(`${auth_constants_1.USER_AUTH_CACHE_PREFIX}${userId}`),
        ]);
        if (!user)
            throw new common_1.ForbiddenException();
        if (!oldRefreshToken)
            throw new common_1.HttpException(exceptions_1.httpErrors.REFRESH_TOKEN_EXPIRED, common_1.HttpStatus.BAD_REQUEST);
        if (refreshToken === oldRefreshToken) {
            const [newAccessToken, newRefreshToken] = await Promise.all([
                this.generateUserAccessToken(user),
                this.generateUserRefreshToken(user),
            ]);
            return {
                accessToken: newAccessToken,
                refreshToken: newRefreshToken,
                iat: Date.now(),
                exp: Date.now() + auth_constants_1.JWT_CONSTANTS.userAccessTokenExpiry,
            };
        }
        else
            throw new common_1.HttpException(exceptions_1.httpErrors.REFRESH_TOKEN_EXPIRED, common_1.HttpStatus.BAD_REQUEST);
    }
    async generateUserAccessToken(user) {
        const { role } = user;
        return this.jwtService.signAsync({
            userId: user['_id'],
            role: role,
            date: Date.now(),
        }, {
            secret: auth_constants_1.JWT_CONSTANTS.userAccessTokenSecret,
            expiresIn: auth_constants_1.JWT_CONSTANTS.userAccessTokenExpiry,
        });
    }
    async generateClientAccessToken(client) {
        const { role } = client;
        return this.jwtService.signAsync({
            userId: client['_id'],
            role: role,
            date: Date.now(),
        }, {
            secret: auth_constants_1.JWT_CONSTANTS.clientAccessTokenSecret,
            expiresIn: auth_constants_1.JWT_CONSTANTS.clientAccessTokenExpiry,
        });
    }
    async generateUserRefreshToken(user) {
        const { role } = user;
        const refreshToken = await this.jwtService.signAsync({
            userId: user['_id'],
            role: role,
            date: Date.now(),
        }, {
            secret: auth_constants_1.JWT_CONSTANTS.userRefreshTokenSecret,
            expiresIn: auth_constants_1.JWT_CONSTANTS.userRefreshTokenExpiry,
        });
        await this.cacheManager.set(`${auth_constants_1.CLIENT_AUTH_CACHE_PREFIX}${user['_id'].toString()}`, refreshToken, {
            ttl: auth_constants_1.JWT_CONSTANTS.userRefreshTokenExpiry,
        });
        return refreshToken;
    }
    async generateClientRefreshToken(user) {
        const { role } = user;
        const refreshToken = await this.jwtService.signAsync({
            userId: user['_id'],
            role: role,
            date: Date.now(),
        }, {
            secret: auth_constants_1.JWT_CONSTANTS.clientRefreshTokenSecret,
            expiresIn: auth_constants_1.JWT_CONSTANTS.clientRefreshTokenExpiry,
        });
        await this.cacheManager.set(`${auth_constants_1.CLIENT_AUTH_CACHE_PREFIX}${user['_id']}`, refreshToken, {
            ttl: auth_constants_1.JWT_CONSTANTS.clientRefreshTokenExpiry,
        });
        return refreshToken;
    }
    async decodeAccessToken(accessToken) {
        return this.jwtService.decode(accessToken);
    }
};
AuthService = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__param(1, common_1.Inject(common_1.CACHE_MANAGER)),
    tslib_1.__metadata("design:paramtypes", [user_service_1.UserService, Object, jwt_1.JwtService,
        axios_1.HttpService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map