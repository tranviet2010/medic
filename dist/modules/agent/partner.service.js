"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartnerService = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const agent_schema_1 = require("./schemas/agent.schema");
let PartnerService = class PartnerService {
    constructor(partnerModel) {
        this.partnerModel = partnerModel;
    }
    async create(param) {
        const createdCat = new this.partnerModel(param);
        createdCat.save();
    }
    async findAll(query) {
        let value = await this.partnerModel.find(query).exec();
        return value;
    }
    async updateNation(id, updateParam) {
        const nation = await this.partnerModel.findByIdAndUpdate(id, updateParam, { new: true });
        if (!nation) {
            throw new common_1.NotFoundException("user with id ${id} not found");
        }
        return nation;
    }
};
PartnerService = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__param(0, mongoose_2.InjectModel(agent_schema_1.Partner.name)),
    tslib_1.__metadata("design:paramtypes", [mongoose_1.Model])
], PartnerService);
exports.PartnerService = PartnerService;
//# sourceMappingURL=partner.service.js.map