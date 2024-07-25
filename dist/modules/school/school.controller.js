"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchoolController = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const http_decorators_1 = require("../../shares/decorators/http.decorators");
const user_enum_1 = require("../../shares/enums/user.enum");
const school_service_1 = require("./school.service");
const school_schema_1 = require("./schemas/school.schema");
let SchoolController = class SchoolController {
    constructor(schoolService) {
        this.schoolService = schoolService;
    }
    async findAll(query) {
        return this.schoolService.findAll(query);
    }
    async create(crud) {
        await this.schoolService.create(crud);
    }
    async updateParam(id, updateNation) {
        return this.schoolService.updateSchool(id, updateNation);
    }
};
tslib_1.__decorate([
    common_1.Get(),
    tslib_1.__param(0, common_1.Query()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], SchoolController.prototype, "findAll", null);
tslib_1.__decorate([
    common_1.Post(),
    tslib_1.__param(0, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [school_schema_1.School]),
    tslib_1.__metadata("design:returntype", Promise)
], SchoolController.prototype, "create", null);
tslib_1.__decorate([
    common_1.Put(':id'),
    tslib_1.__param(0, common_1.Param('id')), tslib_1.__param(1, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, school_schema_1.School]),
    tslib_1.__metadata("design:returntype", Promise)
], SchoolController.prototype, "updateParam", null);
SchoolController = tslib_1.__decorate([
    swagger_1.ApiTags('School'),
    common_1.Controller('school'),
    tslib_1.__metadata("design:paramtypes", [school_service_1.SchoolService])
], SchoolController);
exports.SchoolController = SchoolController;
//# sourceMappingURL=school.controller.js.map