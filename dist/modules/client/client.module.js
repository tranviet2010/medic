"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const client_controller_1 = require("./client.controller");
const client_service_1 = require("./client.service");
const mongoose_1 = require("@nestjs/mongoose");
const client_schema_1 = require("./schemas/client.schema");
const client_policy_schema_1 = require("./schemas/client-policy.schema");
const redisStore = require("cache-manager-redis-store");
const redis_config_1 = require("../../configs/redis.config");
const mail_module_1 = require("../mail/mail.module");
let ClientModule = class ClientModule {
};
ClientModule = tslib_1.__decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: client_schema_1.Client.name, schema: client_schema_1.ClientSchema },
                { name: client_policy_schema_1.ClientPolicy.name, schema: client_policy_schema_1.ClientPolicySchema },
            ]),
            common_1.CacheModule.register({
                store: redisStore,
                ...redis_config_1.redisConfig,
                isGlobal: true,
            }),
            mail_module_1.MailModule,
        ],
        controllers: [client_controller_1.ClientController],
        providers: [client_service_1.ClientService],
        exports: [client_service_1.ClientService],
    })
], ClientModule);
exports.ClientModule = ClientModule;
//# sourceMappingURL=client.module.js.map