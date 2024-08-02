"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const auth_service_1 = require("./auth.service");
const auth_controller_1 = require("./auth.controller");
const redisStore = require("cache-manager-redis-store");
const redis_config_1 = require("../../configs/redis.config");
const client_rt_strategy_1 = require("./strategies/client-rt.strategy");
const user_module_1 = require("../user/user.module");
const axios_1 = require("@nestjs/axios");
const client_module_1 = require("../client/client.module");
const user_at_strategy_1 = require("./strategies/user-at.strategy");
const user_rt_strategy_1 = require("./strategies/user-rt.strategy");
let AuthModule = class AuthModule {
};
AuthModule = tslib_1.__decorate([
    common_1.Module({
        imports: [
            client_module_1.ClientModule,
            user_module_1.UsersModule,
            jwt_1.JwtModule.register({}),
            common_1.CacheModule.register({
                store: redisStore,
                ...redis_config_1.redisConfig,
                isGlobal: true,
            }),
            axios_1.HttpModule.register({
                timeout: 5000,
                maxRedirects: 5,
            }),
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [auth_service_1.AuthService, client_rt_strategy_1.ClientRtStrategy, user_at_strategy_1.UserAtStrategy, user_rt_strategy_1.UserRtStrategy],
        exports: [auth_service_1.AuthService],
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map