"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultSchema = exports.Result = exports.RESULT_MODEL = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = require("@nestjs/mongoose");
exports.RESULT_MODEL = 'result';
let Result = class Result {
};
tslib_1.__decorate([
    mongoose_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", String)
], Result.prototype, "type_result", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", String)
], Result.prototype, "name", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false }),
    tslib_1.__metadata("design:type", String)
], Result.prototype, "sponsor", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false }),
    tslib_1.__metadata("design:type", String)
], Result.prototype, "height", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false }),
    tslib_1.__metadata("design:type", String)
], Result.prototype, "male", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false }),
    tslib_1.__metadata("design:type", String)
], Result.prototype, "weight", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false }),
    tslib_1.__metadata("design:type", String)
], Result.prototype, "phone", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false }),
    tslib_1.__metadata("design:type", String)
], Result.prototype, "dob", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false }),
    tslib_1.__metadata("design:type", String)
], Result.prototype, "number_child", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false }),
    tslib_1.__metadata("design:type", String)
], Result.prototype, "height_femur", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false }),
    tslib_1.__metadata("design:type", String)
], Result.prototype, "height_nose", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false }),
    tslib_1.__metadata("design:type", String)
], Result.prototype, "result", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false }),
    tslib_1.__metadata("design:type", String)
], Result.prototype, "address", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false }),
    tslib_1.__metadata("design:type", String)
], Result.prototype, "email", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false }),
    tslib_1.__metadata("design:type", String)
], Result.prototype, "file", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false }),
    tslib_1.__metadata("design:type", String)
], Result.prototype, "phatho", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false }),
    tslib_1.__metadata("design:type", String)
], Result.prototype, "note", void 0);
Result = tslib_1.__decorate([
    mongoose_1.Schema({ timestamps: true, collection: exports.RESULT_MODEL })
], Result);
exports.Result = Result;
exports.ResultSchema = mongoose_1.SchemaFactory.createForClass(Result);
//# sourceMappingURL=result.schema.js.map