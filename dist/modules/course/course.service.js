"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseService = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const course_schema_1 = require("./schemas/course.schema");
let CourseService = class CourseService {
    constructor(courseModel) {
        this.courseModel = courseModel;
    }
    async create(param) {
        const createdCat = new this.courseModel(param);
        createdCat.save();
    }
    async findAll(query) {
        let value = await this.courseModel.find(query).exec();
        return value;
    }
    async updateCourse(id, updateParam) {
        const city = await this.courseModel.findByIdAndUpdate(id, updateParam, { new: true });
        if (!city) {
            throw new common_1.NotFoundException("user with id ${id} not found");
        }
        return city;
    }
};
CourseService = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__param(0, mongoose_2.InjectModel(course_schema_1.Course.name)),
    tslib_1.__metadata("design:paramtypes", [mongoose_1.Model])
], CourseService);
exports.CourseService = CourseService;
//# sourceMappingURL=course.service.js.map