"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAtStrategy = void 0;
const tslib_1 = require("tslib");
const passport_jwt_1 = require("passport-jwt");
const passport_1 = require("@nestjs/passport");
const common_1 = require("@nestjs/common");
const auth_constants_1 = require("../auth.constants");
const auth_service_1 = require("../auth.service");
const user_service_1 = require("../../user/user.service");
const exceptions_1 = require("../../../shares/exceptions");
const payload_access_token_dto_1 = require("../../../shares/dtos/payload-access-token.dto");
let UserAtStrategy = class UserAtStrategy extends passport_1.PassportStrategy(passport_jwt_1.Strategy, 'user-jwt') {
    constructor(userService, authService) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: auth_constants_1.JWT_CONSTANTS.userAccessTokenSecret,
            passReqToCallback: true,
        });
        this.userService = userService;
        this.authService = authService;
    }
    async validate(req, args) {
        var _a;
        const accessToken = ((_a = req.headers['authorization']) === null || _a === void 0 ? void 0 : _a.split(' ')[1]) || '';
        const authenticatedUser = await this.authService.decodeAccessToken(accessToken);
        if (!authenticatedUser) {
            throw new common_1.UnauthorizedException('UNAUTHORIZED');
        }
        const user = await this.userService.findById(args.userId);
        if (!user) {
            throw new common_1.UnauthorizedException();
        }
        if (user.is_banned) {
            throw new common_1.UnauthorizedException(exceptions_1.httpErrors.USER_BANNED);
        }
        if (!user.is_verify) {
            throw new common_1.UnauthorizedException(exceptions_1.httpErrors.USER_UNVERIFIED);
        }
        return user;
    }
};
UserAtStrategy = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [user_service_1.UserService, auth_service_1.AuthService])
], UserAtStrategy);
exports.UserAtStrategy = UserAtStrategy;
//# sourceMappingURL=user-at.strategy.js.map