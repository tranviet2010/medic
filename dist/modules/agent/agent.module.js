"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const agent_schema_1 = require("./schemas/agent.schema");
const agent_controller_1 = require("./agent.controller");
const agent_service_1 = require("./agent.service");
const user_module_1 = require("../user/user.module");
let AgentModule = class AgentModule {
};
AgentModule = tslib_1.__decorate([
    common_1.Module({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: agent_schema_1.Agent.name, schema: agent_schema_1.AgentSchema }]), user_module_1.UsersModule],
        controllers: [
            agent_controller_1.AgentController
        ],
        providers: [
            agent_service_1.AgentService
        ],
    })
], AgentModule);
exports.AgentModule = AgentModule;
//# sourceMappingURL=agent.module.js.map