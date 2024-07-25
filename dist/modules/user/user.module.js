"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModule = void 0;
const tslib_1 = require("tslib");
const user_service_1 = require("./user.service");
const user_controller_1 = require("./user.controller");
const mongoose_1 = require("@nestjs/mongoose");
const user_schema_1 = require("./schemas/user.schema");
const common_1 = require("@nestjs/common");
const mail_helpers_1 = require("../../shares/helpers/mail.helpers");
const redisStore = require("cache-manager-redis-store");
const redis_config_1 = require("../../configs/redis.config");
const mail_module_1 = require("../mail/mail.module");
let UsersModule = class UsersModule {
};
UsersModule = tslib_1.__decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: user_schema_1.User.name, schema: user_schema_1.UserSchema }]),
            common_1.CacheModule.register(Object.assign(Object.assign({ store: redisStore }, redis_config_1.redisConfig), { isGlobal: true })),
            mail_module_1.MailModule,
        ],
        providers: [user_service_1.UserService, mail_helpers_1.EmailService],
        controllers: [user_controller_1.UserController],
        exports: [user_service_1.UserService],
    })
], UsersModule);
exports.UsersModule = UsersModule;
//# sourceMappingURL=user.module.js.map