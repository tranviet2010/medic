"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParamService = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const noseFemur_schema_1 = require("./schemas/noseFemur.schema");
let ParamService = class ParamService {
    constructor(paramsModel) {
        this.paramsModel = paramsModel;
    }
    async createParam(params) {
        return this.paramsModel.create(params);
    }
    async findAll(query) {
        let value = await this.paramsModel.find(query).exec();
        return value;
    }
    async updateParam(id, updateParam) {
        const param = await this.paramsModel.findByIdAndUpdate(id, updateParam, { new: true });
        if (!param) {
            throw new common_1.NotFoundException("user with id ${id} not found");
        }
        return param;
    }
};
ParamService = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__param(0, mongoose_2.InjectModel(noseFemur_schema_1.Params.name)),
    tslib_1.__metadata("design:paramtypes", [mongoose_1.Model])
], ParamService);
exports.ParamService = ParamService;
//# sourceMappingURL=param.service.js.map