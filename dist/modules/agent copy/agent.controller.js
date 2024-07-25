"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentController = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const http_decorators_1 = require("../../shares/decorators/http.decorators");
const user_enum_1 = require("../../shares/enums/user.enum");
const agent_service_1 = require("./agent.service");
const agent_schema_1 = require("./schemas/agent.schema");
let AgentController = class AgentController {
    constructor(agentService) {
        this.agentService = agentService;
    }
    async findAll(query) {
        return this.agentService.findAll(query);
    }
    async create(crud) {
        await this.agentService.create(crud);
    }
    async updateParam(id, updateNation) {
        return this.agentService.updateAgent(id, updateNation);
    }
};
tslib_1.__decorate([
    common_1.Get(),
    tslib_1.__param(0, common_1.Query()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], AgentController.prototype, "findAll", null);
tslib_1.__decorate([
    common_1.Post(),
    tslib_1.__param(0, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [agent_schema_1.Agent]),
    tslib_1.__metadata("design:returntype", Promise)
], AgentController.prototype, "create", null);
tslib_1.__decorate([
    common_1.Put(':id'),
    tslib_1.__param(0, common_1.Param('id')), tslib_1.__param(1, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, agent_schema_1.Agent]),
    tslib_1.__metadata("design:returntype", Promise)
], AgentController.prototype, "updateParam", null);
AgentController = tslib_1.__decorate([
    swagger_1.ApiTags('Nation'),
    common_1.Controller('nation'),
    tslib_1.__metadata("design:paramtypes", [agent_service_1.AgentService])
], AgentController);
exports.AgentController = AgentController;
//# sourceMappingURL=agent.controller.js.map