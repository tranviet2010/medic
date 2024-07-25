"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoseFemurService = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const height_schema_1 = require("./schemas/height.schema");
let NoseFemurService = class NoseFemurService {
    constructor(NoseFemurModel) {
        this.NoseFemurModel = NoseFemurModel;
    }
    async createParam(params) {
        return this.NoseFemurModel.create(params);
    }
    async findAll(query) {
        let value = await this.NoseFemurModel.find(query).exec();
        return value;
    }
    async findByQuery(query) {
        var _a, _b;
        const { age, average } = query;
        const results = await this.NoseFemurModel.find({ age, average }).exec();
        if (results && results.length > 0) {
            return { message: 'Found records', data: results };
        }
        else {
            const resultAge = (_a = (await this.NoseFemurModel.find({ age }))) === null || _a === void 0 ? void 0 : _a.map(value => value.limit);
            const resultAverage = (_b = (await this.NoseFemurModel.find({ age }))) === null || _b === void 0 ? void 0 : _b.map(value => value.average);
            const [rangeString] = resultAge;
            const [startString, endString] = rangeString.split('-');
            const sum = Number(average) - Number(resultAverage);
            const newStart = Number(startString) + sum;
            const newEnd = Number(endString) + sum;
            return [newStart, newEnd];
        }
    }
    async updateParam(id, updateParam) {
        const param = await this.NoseFemurModel.findByIdAndUpdate(id, updateParam, { new: true });
        if (!param) {
            throw new common_1.NotFoundException("user with id ${id} not found");
        }
        return param;
    }
};
NoseFemurService = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__param(0, mongoose_2.InjectModel(height_schema_1.NoseFemur.name)),
    tslib_1.__metadata("design:paramtypes", [mongoose_1.Model])
], NoseFemurService);
exports.NoseFemurService = NoseFemurService;
//# sourceMappingURL=noseFemur.service.js.map