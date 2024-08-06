"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientAtStrategy = void 0;
const tslib_1 = require("tslib");
const passport_jwt_1 = require("passport-jwt");
const passport_1 = require("@nestjs/passport");
const common_1 = require("@nestjs/common");
const auth_constants_1 = require("../auth.constants");
const auth_service_1 = require("../auth.service");
const exceptions_1 = require("../../../shares/exceptions");
const payload_access_token_dto_1 = require("../../../shares/dtos/payload-access-token.dto");
const client_service_1 = require("../../client/client.service");
let ClientAtStrategy = class ClientAtStrategy extends passport_1.PassportStrategy(passport_jwt_1.Strategy, 'client-jwt') {
    constructor(clientService, authService) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: auth_constants_1.JWT_CONSTANTS.clientAccessTokenSecret,
            passReqToCallback: true,
        });
        this.clientService = clientService;
        this.authService = authService;
    }
    async validate(req, args) {
        var _a;
        const accessToken = ((_a = req.headers['authorization']) === null || _a === void 0 ? void 0 : _a.split(' ')[1]) || '';
        const authenticatedUser = await this.authService.decodeAccessToken(accessToken);
        if (!authenticatedUser) {
            throw new common_1.UnauthorizedException('UNAUTHORIZED');
        }
        const client = await this.clientService.findById(args.userId);
        if (!client) {
            throw new common_1.UnauthorizedException();
        }
        if (client.is_banned) {
            throw new common_1.UnauthorizedException(exceptions_1.httpErrors.CLIENT_BANNED);
        }
        if (!client.is_verify) {
            throw new common_1.UnauthorizedException(exceptions_1.httpErrors.CLIENT_UNVERIFIED);
        }
        return client;
    }
};
ClientAtStrategy = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [client_service_1.ClientService, auth_service_1.AuthService])
], ClientAtStrategy);
exports.ClientAtStrategy = ClientAtStrategy;
//# sourceMappingURL=client-at.strategy.js.map