"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseService = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const course_schema_1 = require("./schemas/course.schema");
let CourseService = class CourseService {
    constructor(CourseModel) {
        this.CourseModel = CourseModel;
    }
    async createParam(params) {
        return this.CourseModel.create(params);
    }
    async findAll(query) {
        let value = await this.CourseModel.find(query).exec();
        return value;
    }
    async updateParam(id, updateParam) {
        const param = await this.CourseModel.findByIdAndUpdate(id, updateParam, { new: true });
        if (!param) {
            throw new common_1.NotFoundException("user with id ${id} not found");
        }
        return param;
    }
};
CourseService = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__param(0, mongoose_2.InjectModel(course_schema_1.Course.name)),
    tslib_1.__metadata("design:paramtypes", [mongoose_1.Model])
], CourseService);
exports.CourseService = CourseService;
//# sourceMappingURL=course.service.js.map