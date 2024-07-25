"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeightSchema = exports.Height = exports.HEIGHT_MODEL = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = require("@nestjs/mongoose");
exports.HEIGHT_MODEL = 'height';
let Height = class Height {
};
tslib_1.__decorate([
    mongoose_1.Prop({ type: Number }),
    tslib_1.__metadata("design:type", Number)
], Height.prototype, "age", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ type: Number }),
    tslib_1.__metadata("design:type", Number)
], Height.prototype, "month_age", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: Number }),
    tslib_1.__metadata("design:type", Number)
], Height.prototype, "number_day", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ type: String }),
    tslib_1.__metadata("design:type", String)
], Height.prototype, "up_height3", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ type: String }),
    tslib_1.__metadata("design:type", String)
], Height.prototype, "up_height2", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ type: String }),
    tslib_1.__metadata("design:type", String)
], Height.prototype, "up_height1", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ type: String }),
    tslib_1.__metadata("design:type", String)
], Height.prototype, "height", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ type: String }),
    tslib_1.__metadata("design:type", String)
], Height.prototype, "dow_height3", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ type: String }),
    tslib_1.__metadata("design:type", String)
], Height.prototype, "dow_height2", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ type: String }),
    tslib_1.__metadata("design:type", String)
], Height.prototype, "dow_height1", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ type: String }),
    tslib_1.__metadata("design:type", String)
], Height.prototype, "up_weight3", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ type: String }),
    tslib_1.__metadata("design:type", String)
], Height.prototype, "up_weight2", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ type: String }),
    tslib_1.__metadata("design:type", String)
], Height.prototype, "up_weight1", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ type: String }),
    tslib_1.__metadata("design:type", String)
], Height.prototype, "weight", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ type: String }),
    tslib_1.__metadata("design:type", String)
], Height.prototype, "dow_weight3", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ type: String }),
    tslib_1.__metadata("design:type", String)
], Height.prototype, "dow_weight2", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ type: String }),
    tslib_1.__metadata("design:type", String)
], Height.prototype, "dow_weight1", void 0);
Height = tslib_1.__decorate([
    mongoose_1.Schema({ timestamps: true, collection: exports.HEIGHT_MODEL })
], Height);
exports.Height = Height;
exports.HeightSchema = mongoose_1.SchemaFactory.createForClass(Height);
//# sourceMappingURL=height.schema.js.map