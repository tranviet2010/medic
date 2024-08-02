"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DowWeightSchema = exports.UpWeightSchema = exports.DowHeightSchema = exports.UpHeightSchema = exports.HeightSchema = exports.Height = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = require("@nestjs/mongoose");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
let UpHeight = class UpHeight {
};
tslib_1.__decorate([
    mongoose_1.Prop({ type: String }),
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], UpHeight.prototype, "up_height3", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ type: String }),
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], UpHeight.prototype, "up_height2", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ type: String }),
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], UpHeight.prototype, "up_height1", void 0);
UpHeight = tslib_1.__decorate([
    mongoose_1.Schema({ _id: false })
], UpHeight);
let DowHeight = class DowHeight {
};
tslib_1.__decorate([
    mongoose_1.Prop({ type: String }),
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], DowHeight.prototype, "dow_height3", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ type: String }),
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], DowHeight.prototype, "dow_height2", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ type: String }),
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], DowHeight.prototype, "dow_height1", void 0);
DowHeight = tslib_1.__decorate([
    mongoose_1.Schema({ _id: false })
], DowHeight);
let UpWeight = class UpWeight {
};
tslib_1.__decorate([
    mongoose_1.Prop({ type: String }),
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], UpWeight.prototype, "up_weight3", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ type: String }),
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], UpWeight.prototype, "up_weight2", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ type: String }),
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], UpWeight.prototype, "up_weight1", void 0);
UpWeight = tslib_1.__decorate([
    mongoose_1.Schema({ _id: false })
], UpWeight);
let DowWeight = class DowWeight {
};
tslib_1.__decorate([
    mongoose_1.Prop({ type: String }),
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], DowWeight.prototype, "dow_weight3", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ type: String }),
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], DowWeight.prototype, "dow_weight2", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ type: String }),
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], DowWeight.prototype, "dow_weight1", void 0);
DowWeight = tslib_1.__decorate([
    mongoose_1.Schema({ _id: false })
], DowWeight);
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
    mongoose_1.Prop({ required: true, type: Number }),
    tslib_1.__metadata("design:type", Number)
], Height.prototype, "number_day", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ type: UpHeight, required: false }),
    class_transformer_1.Type(() => UpHeight),
    tslib_1.__metadata("design:type", UpHeight)
], Height.prototype, "up_height", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ type: String }),
    tslib_1.__metadata("design:type", String)
], Height.prototype, "height", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ type: DowHeight, required: false }),
    class_transformer_1.Type(() => DowHeight),
    tslib_1.__metadata("design:type", DowHeight)
], Height.prototype, "dow_height", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ type: UpWeight, required: false }),
    class_transformer_1.Type(() => UpWeight),
    tslib_1.__metadata("design:type", UpWeight)
], Height.prototype, "up_weight", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ type: String }),
    tslib_1.__metadata("design:type", String)
], Height.prototype, "weight", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ type: DowWeight, required: false }),
    class_transformer_1.Type(() => DowWeight),
    tslib_1.__metadata("design:type", DowWeight)
], Height.prototype, "dow_weight", void 0);
Height = tslib_1.__decorate([
    mongoose_1.Schema({ timestamps: true, collection: 'height' })
], Height);
exports.Height = Height;
exports.HeightSchema = mongoose_1.SchemaFactory.createForClass(Height);
exports.UpHeightSchema = mongoose_1.SchemaFactory.createForClass(UpHeight);
exports.DowHeightSchema = mongoose_1.SchemaFactory.createForClass(DowHeight);
exports.UpWeightSchema = mongoose_1.SchemaFactory.createForClass(UpWeight);
exports.DowWeightSchema = mongoose_1.SchemaFactory.createForClass(DowWeight);
//# sourceMappingURL=height.schema.js.map