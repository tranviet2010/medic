"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultService = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const product_schema_1 = require("./schemas/product.schema");
let ResultService = class ResultService {
    constructor(ResultModel) {
        this.ResultModel = ResultModel;
    }
    async createParam(params) {
        return this.ResultModel.create(params);
    }
    async findAll(query) {
        let value = await this.ResultModel.find(query).exec();
        return value;
    }
    async updateParam(id, updateParam) {
        const param = await this.ResultModel.findByIdAndUpdate(id, updateParam, { new: true });
        if (!param) {
            throw new common_1.NotFoundException("user with id ${id} not found");
        }
        return param;
    }
};
ResultService = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__param(0, mongoose_2.InjectModel(product_schema_1.Result.name)),
    tslib_1.__metadata("design:paramtypes", [mongoose_1.Model])
], ResultService);
exports.ResultService = ResultService;
//# sourceMappingURL=result.service.js.map