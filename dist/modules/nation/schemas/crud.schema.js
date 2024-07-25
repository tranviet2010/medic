"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NationSchema = exports.Nation = exports.NATION_MODEL = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = require("@nestjs/mongoose");
exports.NATION_MODEL = 'nation';
let Nation = class Nation {
};
tslib_1.__decorate([
    mongoose_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", String)
], Nation.prototype, "name", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", String)
], Nation.prototype, "code", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", Number)
], Nation.prototype, "phan_he", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", String)
], Nation.prototype, "images", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", String)
], Nation.prototype, "dispaly_menu", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", String)
], Nation.prototype, "code_menu", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false }),
    tslib_1.__metadata("design:type", String)
], Nation.prototype, "note", void 0);
Nation = tslib_1.__decorate([
    mongoose_1.Schema({ timestamps: true, collection: exports.NATION_MODEL })
], Nation);
exports.Nation = Nation;
exports.NationSchema = mongoose_1.SchemaFactory.createForClass(Nation);
//# sourceMappingURL=crud.schema.js.map