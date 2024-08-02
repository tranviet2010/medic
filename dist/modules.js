"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bull_1 = require("@nestjs/bull");
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const redisStore = require("cache-manager-redis-store");
const nestjs_console_1 = require("nestjs-console");
const database_config_1 = require("./configs/database.config");
const redis_config_1 = require("./configs/redis.config");
const http_module_1 = require("./shares/http-clients/http.module");
const mongoose_1 = require("@nestjs/mongoose");
const user_module_1 = require("./modules/user/user.module");
const auth_module_1 = require("./modules/auth/auth.module");
const mail_module_1 = require("./modules/mail/mail.module");
const client_module_1 = require("./modules/client/client.module");
const param_module_1 = require("./modules/param/param.module");
const param_module_2 = require("./modules/nose-femur/param.module");
const partner_module_1 = require("./modules/partner/partner.module");
const customer_module_1 = require("./modules/customer/customer.module");
const agent_module_1 = require("./modules/agent/agent.module");
const height_module_1 = require("./modules/height/height.module");
const result_module_1 = require("./modules/result/result.module");
const upload_module_1 = require("./modules/upload/upload.module");
const product_module_1 = require("./modules/product/product.module");
const Modules = [
    common_1.Logger,
    mongoose_1.MongooseModule.forRoot(database_config_1.mongodb.uri, database_config_1.mongodb.options),
    schedule_1.ScheduleModule.forRoot(),
    nestjs_console_1.ConsoleModule,
    http_module_1.HttpClientModule,
    bull_1.BullModule.forRoot({
        redis: redis_config_1.redisConfig,
    }),
    common_1.CacheModule.register({
        store: redisStore,
        ...redis_config_1.redisConfig,
        isGlobal: true,
    }),
    auth_module_1.AuthModule,
    user_module_1.UsersModule,
    mail_module_1.MailModule,
    param_module_1.ParamModule,
    client_module_1.ClientModule,
    param_module_2.NoseFemurModule,
    partner_module_1.PartnerModule,
    customer_module_1.CustomerModule,
    agent_module_1.AgentModule,
    height_module_1.HeightModule,
    result_module_1.ResultModule,
    upload_module_1.FilesModule,
    product_module_1.ProductModule
];
exports.default = Modules;
//# sourceMappingURL=modules.js.map