"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoseFemurSchema = exports.NoseFemur = exports.NOSE_FEMUR_MODEL = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = require("@nestjs/mongoose");
exports.NOSE_FEMUR_MODEL = 'nose-femur';
let NoseFemur = class NoseFemur {
};
tslib_1.__decorate([
    mongoose_1.Prop({ required: Number }),
    tslib_1.__metadata("design:type", Number)
], NoseFemur.prototype, "age", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ type: String }),
    tslib_1.__metadata("design:type", String)
], NoseFemur.prototype, "average", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", String)
], NoseFemur.prototype, "limit", void 0);
NoseFemur = tslib_1.__decorate([
    mongoose_1.Schema({ timestamps: true, collection: exports.NOSE_FEMUR_MODEL })
], NoseFemur);
exports.NoseFemur = NoseFemur;
exports.NoseFemurSchema = mongoose_1.SchemaFactory.createForClass(NoseFemur);
//# sourceMappingURL=noseFemur.schema.js.map