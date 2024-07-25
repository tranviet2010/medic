"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepartmentModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const department_controller_1 = require("./department.controller");
const department_service_1 = require("./department.service");
const mongoose_1 = require("@nestjs/mongoose");
const department_schema_1 = require("./schemas/department.schema");
let DepartmentModule = class DepartmentModule {
};
DepartmentModule = tslib_1.__decorate([
    common_1.Module({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: department_schema_1.Department.name, schema: department_schema_1.DepartmentSchema }])],
        controllers: [department_controller_1.DepartmentController],
        providers: [department_service_1.DepartmentService],
    })
], DepartmentModule);
exports.DepartmentModule = DepartmentModule;
//# sourceMappingURL=department.module.js.map