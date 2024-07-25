"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParamSchema = exports.Params = exports.NOSE_FEMUR_MODEL = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = require("@nestjs/mongoose");
exports.NOSE_FEMUR_MODEL = 'nose-femur';
let Params = class Params {
};
tslib_1.__decorate([
    mongoose_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", String)
], Params.prototype, "title", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false, type: String }),
    tslib_1.__metadata("design:type", String)
], Params.prototype, "images", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", String)
], Params.prototype, "content", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", String)
], Params.prototype, "code", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", String)
], Params.prototype, "type", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: true, type: Number }),
    tslib_1.__metadata("design:type", String)
], Params.prototype, "display", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", String)
], Params.prototype, "code_menu", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: true, default: 1 }),
    tslib_1.__metadata("design:type", String)
], Params.prototype, "phan_he", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", String)
], Params.prototype, "note", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false }),
    tslib_1.__metadata("design:type", String)
], Params.prototype, "url", void 0);
Params = tslib_1.__decorate([
    mongoose_1.Schema({ timestamps: true, collection: exports.NOSE_FEMUR_MODEL })
], Params);
exports.Params = Params;
exports.ParamSchema = mongoose_1.SchemaFactory.createForClass(Params);
//# sourceMappingURL=noseFemur.schema.js.map