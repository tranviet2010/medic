"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const customer_schema_1 = require("./schemas/customer.schema");
const customer_controller_1 = require("./customer.controller");
const custommer_service_1 = require("./custommer.service");
let AgentModule = class AgentModule {
};
AgentModule = tslib_1.__decorate([
    common_1.Module({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: customer_schema_1.Agent.name, schema: customer_schema_1.AgentSchema }])],
        controllers: [
            customer_controller_1.AgentController
        ],
        providers: [
            custommer_service_1.AgentService
        ],
    })
], AgentModule);
exports.AgentModule = AgentModule;
//# sourceMappingURL=agent.module.js.map