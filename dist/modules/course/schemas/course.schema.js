"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseSchema = exports.Course = exports.ProductSchema = exports.COURSE_MODEL = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = require("@nestjs/mongoose");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
exports.COURSE_MODEL = 'course';
let Product = class Product {
};
tslib_1.__decorate([
    mongoose_1.Prop({ type: String }),
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], Product.prototype, "name_product", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ type: String }),
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], Product.prototype, "quantity", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ type: String }),
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], Product.prototype, "exp", void 0);
Product = tslib_1.__decorate([
    mongoose_1.Schema({ _id: false })
], Product);
exports.ProductSchema = mongoose_1.SchemaFactory.createForClass(Product);
let Course = class Course {
};
tslib_1.__decorate([
    mongoose_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", String)
], Course.prototype, "name", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false }),
    tslib_1.__metadata("design:type", String)
], Course.prototype, "group", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false }),
    tslib_1.__metadata("design:type", String)
], Course.prototype, "male", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false }),
    tslib_1.__metadata("design:type", String)
], Course.prototype, "age", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false }),
    tslib_1.__metadata("design:type", String)
], Course.prototype, "define", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false }),
    tslib_1.__metadata("design:type", String)
], Course.prototype, "note", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ type: [exports.ProductSchema], required: false }),
    class_transformer_1.Type(() => Product),
    tslib_1.__metadata("design:type", Array)
], Course.prototype, "products", void 0);
Course = tslib_1.__decorate([
    mongoose_1.Schema({ timestamps: true, collection: exports.COURSE_MODEL })
], Course);
exports.Course = Course;
exports.CourseSchema = mongoose_1.SchemaFactory.createForClass(Course);
//# sourceMappingURL=course.schema.js.map