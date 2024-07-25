"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentService = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const agent_schema_1 = require("./schemas/agent.schema");
let AgentService = class AgentService {
    constructor(agentModel) {
        this.agentModel = agentModel;
    }
    async create(param) {
        const createdCat = new this.agentModel(param);
        createdCat.save();
    }
    async findAll(query) {
        let value = await this.agentModel.find(query).exec();
        return value;
    }
    async updateAgent(id, updateParam) {
        const nation = await this.agentModel.findByIdAndUpdate(id, updateParam, { new: true });
        if (!nation) {
            throw new common_1.NotFoundException("user with id ${id} not found");
        }
        return nation;
    }
};
AgentService = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__param(0, mongoose_2.InjectModel(agent_schema_1.Agent.name)),
    tslib_1.__metadata("design:paramtypes", [mongoose_1.Model])
], AgentService);
exports.AgentService = AgentService;
//# sourceMappingURL=agent.service.js.map