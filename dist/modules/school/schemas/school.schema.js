"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchoolSchema = exports.School = exports.SCHOOL_MODEL = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = require("@nestjs/mongoose");
exports.SCHOOL_MODEL = 'school';
let School = class School {
};
tslib_1.__decorate([
    mongoose_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", String)
], School.prototype, "name", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false }),
    tslib_1.__metadata("design:type", String)
], School.prototype, "nation", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", String)
], School.prototype, "city", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false }),
    tslib_1.__metadata("design:type", String)
], School.prototype, "introduce", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false }),
    tslib_1.__metadata("design:type", String)
], School.prototype, "avatar", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", String)
], School.prototype, "phan_he", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false }),
    tslib_1.__metadata("design:type", String)
], School.prototype, "note", void 0);
School = tslib_1.__decorate([
    mongoose_1.Schema({ timestamps: true, collection: exports.SCHOOL_MODEL })
], School);
exports.School = School;
exports.SchoolSchema = mongoose_1.SchemaFactory.createForClass(School);
//# sourceMappingURL=school.schema.js.map