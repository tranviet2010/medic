"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const product_schema_1 = require("./schemas/product.schema");
let ProductService = class ProductService {
    constructor(ProductModel) {
        this.ProductModel = ProductModel;
    }
    async createParam(params) {
        return this.ProductModel.create(params);
    }
    async findAll(query) {
        let value = await this.ProductModel.find(query).exec();
        return value;
    }
    async updateParam(id, updateParam) {
        const param = await this.ProductModel.findByIdAndUpdate(id, updateParam, { new: true });
        if (!param) {
            throw new common_1.NotFoundException("user with id ${id} not found");
        }
        return param;
    }
};
ProductService = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__param(0, mongoose_2.InjectModel(product_schema_1.Product.name)),
    tslib_1.__metadata("design:paramtypes", [mongoose_1.Model])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map