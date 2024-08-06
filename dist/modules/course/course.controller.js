"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseController = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const http_decorators_1 = require("../../shares/decorators/http.decorators");
const user_enum_1 = require("../../shares/enums/user.enum");
const course_service_1 = require("./course.service");
const course_schema_1 = require("./schemas/course.schema");
let CourseController = class CourseController {
    constructor(CourseService) {
        this.CourseService = CourseService;
    }
    async findAll(query) {
        return this.CourseService.findAll(query);
    }
    async create(param) {
        const paramInput = await this.CourseService.createParam(param);
        return { message: 'Params created successfully', paramInput };
    }
    async updateParam(id, updateParam) {
        return this.CourseService.updateParam(id, updateParam);
    }
};
tslib_1.__decorate([
    common_1.Get(),
    tslib_1.__param(0, common_1.Query()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [course_schema_1.Course]),
    tslib_1.__metadata("design:returntype", Promise)
], CourseController.prototype, "findAll", null);
tslib_1.__decorate([
    common_1.Post(),
    tslib_1.__param(0, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [course_schema_1.Course]),
    tslib_1.__metadata("design:returntype", Promise)
], CourseController.prototype, "create", null);
tslib_1.__decorate([
    common_1.Put(':id'),
    tslib_1.__param(0, common_1.Param('id')), tslib_1.__param(1, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, course_schema_1.Course]),
    tslib_1.__metadata("design:returntype", Promise)
], CourseController.prototype, "updateParam", null);
CourseController = tslib_1.__decorate([
    swagger_1.ApiTags('Course'),
    common_1.Controller('course'),
    tslib_1.__metadata("design:paramtypes", [course_service_1.CourseService])
], CourseController);
exports.CourseController = CourseController;
//# sourceMappingURL=course.controller.js.map