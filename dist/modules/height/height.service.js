"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeightService = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const height_schema_1 = require("./schemas/height.schema");
let HeightService = class HeightService {
    constructor(HeightModel) {
        this.HeightModel = HeightModel;
    }
    async createParam(params) {
        return this.HeightModel.create(params);
    }
    async findAll(query) {
        let value = await this.HeightModel.find(query).exec();
        return value;
    }
    async findByQuery(query) {
    }
    async updateParam(id, updateParam) {
        const param = await this.HeightModel.findByIdAndUpdate(id, updateParam, { new: true });
        if (!param) {
            throw new common_1.NotFoundException("user with id ${id} not found");
        }
        return param;
    }
};
HeightService = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__param(0, mongoose_2.InjectModel(height_schema_1.Height.name)),
    tslib_1.__metadata("design:paramtypes", [mongoose_1.Model])
], HeightService);
exports.HeightService = HeightService;
//# sourceMappingURL=height.service.js.map