"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepartmentSchema = exports.Department = exports.DEPARTMENT_MODEL = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = require("@nestjs/mongoose");
exports.DEPARTMENT_MODEL = 'department';
let Department = class Department {
};
tslib_1.__decorate([
    mongoose_1.Prop({ type: String }),
    tslib_1.__metadata("design:type", String)
], Department.prototype, "name", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false, type: String }),
    tslib_1.__metadata("design:type", String)
], Department.prototype, "created_by", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false, type: String }),
    tslib_1.__metadata("design:type", String)
], Department.prototype, "updated_by", void 0);
Department = tslib_1.__decorate([
    mongoose_1.Schema({ timestamps: true, collection: exports.DEPARTMENT_MODEL })
], Department);
exports.Department = Department;
exports.DepartmentSchema = mongoose_1.SchemaFactory.createForClass(Department);
//# sourceMappingURL=department.schema.js.map