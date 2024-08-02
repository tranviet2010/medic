"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientRtStrategy = void 0;
const tslib_1 = require("tslib");
const passport_jwt_1 = require("passport-jwt");
const passport_1 = require("@nestjs/passport");
const common_1 = require("@nestjs/common");
const auth_constants_1 = require("../auth.constants");
let ClientRtStrategy = class ClientRtStrategy extends passport_1.PassportStrategy(passport_jwt_1.Strategy, 'client-jwt-refresh') {
    constructor() {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: auth_constants_1.JWT_CONSTANTS.clientRefreshTokenSecret,
            passReqToCallback: true,
        });
    }
    async validate(req, payload) {
        const refreshToken = req.get('authorization').replace('Bearer', '').trim();
        if (!refreshToken) {
            throw new common_1.UnauthorizedException('UNAUTHORIZED');
        }
        return {
            ...payload,
            refreshToken,
        };
    }
};
ClientRtStrategy = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [])
], ClientRtStrategy);
exports.ClientRtStrategy = ClientRtStrategy;
//# sourceMappingURL=client-rt.strategy.js.map