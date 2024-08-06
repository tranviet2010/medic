"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const http_decorators_1 = require("../../shares/decorators/http.decorators");
const user_enum_1 = require("../../shares/enums/user.enum");
const product_service_1 = require("./product.service");
const course_schema_1 = require("./schemas/course.schema");
let ProductController = class ProductController {
    constructor(ProductService) {
        this.ProductService = ProductService;
    }
    async findAll(query) {
        return this.ProductService.findAll(query);
    }
    async create(param) {
        const paramInput = await this.ProductService.createParam(param);
        return { message: 'Params created successfully', paramInput };
    }
    async updateParam(id, updateParam) {
        return this.ProductService.updateParam(id, updateParam);
    }
};
tslib_1.__decorate([
    common_1.Get(),
    tslib_1.__param(0, common_1.Query()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [course_schema_1.Product]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductController.prototype, "findAll", null);
tslib_1.__decorate([
    common_1.Post(),
    tslib_1.__param(0, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [course_schema_1.Product]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductController.prototype, "create", null);
tslib_1.__decorate([
    common_1.Put(':id'),
    tslib_1.__param(0, common_1.Param('id')), tslib_1.__param(1, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, course_schema_1.Product]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductController.prototype, "updateParam", null);
ProductController = tslib_1.__decorate([
    swagger_1.ApiTags('Product'),
    common_1.Controller('product'),
    tslib_1.__metadata("design:paramtypes", [product_service_1.ProductService])
], ProductController);
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map