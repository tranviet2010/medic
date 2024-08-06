"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoseFemurService = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const noseFemur_schema_1 = require("./schemas/noseFemur.schema");
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
        var _a, _b, _c, _d;
        const { age, averageNose, averageFemur } = query;
        const results = await this.NoseFemurModel.find({ age, averageNose, averageFemur }).exec();
        if (results && results.length > 0) {
            return { message: 'Found records', data: results };
        }
        else {
            const resultAgeFemur = (_a = (await this.NoseFemurModel.find({ age }))) === null || _a === void 0 ? void 0 : _a.map(value => value.limitNose);
            const resultAverageFemur = (_b = (await this.NoseFemurModel.find({ age }))) === null || _b === void 0 ? void 0 : _b.map(value => value.averageNose);
            const resultAgeNose = (_c = (await this.NoseFemurModel.find({ age }))) === null || _c === void 0 ? void 0 : _c.map(value => value.limitFemur);
            const resultAverageNose = (_d = (await this.NoseFemurModel.find({ age }))) === null || _d === void 0 ? void 0 : _d.map(value => value.averageFemur);
            const [rangeStringFe] = resultAgeFemur;
            const [startStringFe, endStringFe] = rangeStringFe.split('-');
            const sumFemur = Number(averageFemur) - Number(resultAverageFemur);
            const newStartFemur = Number(startStringFe) + sumFemur;
            const newEndFemur = Number(endStringFe) + sumFemur;
            const [rangeStringNo] = resultAgeNose;
            const [startStringNo, endStringNo] = rangeStringNo.split('-');
            const sumNose = Number(averageNose) - Number(resultAverageNose);
            const newStartNose = Number(startStringNo) + sumNose;
            const newEndNose = Number(endStringNo) + sumNose;
            return [{ newStartFemur, newEndFemur, sumFemur }, { newStartNose, newEndNose, sumNose }];
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
    tslib_1.__param(0, mongoose_2.InjectModel(noseFemur_schema_1.NoseFemur.name)),
    tslib_1.__metadata("design:paramtypes", [mongoose_1.Model])
], NoseFemurService);
exports.NoseFemurService = NoseFemurService;
//# sourceMappingURL=noseFemur.service.js.map