"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchoolService = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const school_schema_1 = require("./schemas/school.schema");
let SchoolService = class SchoolService {
    constructor(schoolModel) {
        this.schoolModel = schoolModel;
    }
    async create(param) {
        const createdCat = new this.schoolModel(param);
        createdCat.save();
    }
    async findAll(query) {
        let value = await this.schoolModel.find(query).exec();
        return value;
    }
    async updateSchool(id, updateParam) {
        const city = await this.schoolModel.findByIdAndUpdate(id, updateParam, { new: true });
        if (!city) {
            throw new common_1.NotFoundException("user with id ${id} not found");
        }
        return city;
    }
};
SchoolService = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__param(0, mongoose_2.InjectModel(school_schema_1.School.name)),
    tslib_1.__metadata("design:paramtypes", [mongoose_1.Model])
], SchoolService);
exports.SchoolService = SchoolService;
//# sourceMappingURL=school.service.js.map