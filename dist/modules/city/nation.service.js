"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NationService = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const city_schema_1 = require("./schemas/city.schema");
let NationService = class NationService {
    constructor(nationModel) {
        this.nationModel = nationModel;
    }
    async create(param) {
        const createdCat = new this.nationModel(param);
        createdCat.save();
    }
    async findAll(query) {
        let value = await this.nationModel.find(query).exec();
        return value;
    }
    async updateNation(id, updateParam) {
        const nation = await this.nationModel.findByIdAndUpdate(id, updateParam, { new: true });
        if (!nation) {
            throw new common_1.NotFoundException("user with id ${id} not found");
        }
        return nation;
    }
};
NationService = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__param(0, mongoose_2.InjectModel(city_schema_1.Nation.name)),
    tslib_1.__metadata("design:paramtypes", [mongoose_1.Model])
], NationService);
exports.NationService = NationService;
//# sourceMappingURL=nation.service.js.map