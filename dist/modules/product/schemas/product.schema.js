"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSchema = exports.Product = exports.PRODUCT_MODEL = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = require("@nestjs/mongoose");
exports.PRODUCT_MODEL = 'product';
let Product = class Product {
};
tslib_1.__decorate([
    mongoose_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", String)
], Product.prototype, "name", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false }),
    tslib_1.__metadata("design:type", String)
], Product.prototype, "buy", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false }),
    tslib_1.__metadata("design:type", String)
], Product.prototype, "dis", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false }),
    tslib_1.__metadata("design:type", String)
], Product.prototype, "image", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false }),
    tslib_1.__metadata("design:type", String)
], Product.prototype, "note", void 0);
Product = tslib_1.__decorate([
    mongoose_1.Schema({ timestamps: true, collection: exports.PRODUCT_MODEL })
], Product);
exports.Product = Product;
exports.ProductSchema = mongoose_1.SchemaFactory.createForClass(Product);
//# sourceMappingURL=product.schema.js.map