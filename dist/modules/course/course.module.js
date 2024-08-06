"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const course_service_1 = require("./course.service");
const course_schema_1 = require("./schemas/course.schema");
const course_controller_1 = require("./course.controller");
let CourseModule = class CourseModule {
};
CourseModule = tslib_1.__decorate([
    common_1.Module({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: course_schema_1.Course.name, schema: course_schema_1.CourseSchema }])],
        controllers: [
            course_controller_1.CourseController
        ],
        providers: [
            course_service_1.CourseService
        ],
    })
], CourseModule);
exports.CourseModule = CourseModule;
//# sourceMappingURL=course.module.js.map