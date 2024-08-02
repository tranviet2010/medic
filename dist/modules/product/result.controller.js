"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultController = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const http_decorators_1 = require("../../shares/decorators/http.decorators");
const user_enum_1 = require("../../shares/enums/user.enum");
const result_service_1 = require("./result.service");
const product_schema_1 = require("./schemas/product.schema");
let ResultController = class ResultController {
    constructor(ResultService) {
        this.ResultService = ResultService;
    }
    async findAll(query) {
        return this.ResultService.findAll(query);
    }
    async create(param) {
        const paramInput = await this.ResultService.createParam(param);
        return { message: 'Params created successfully', paramInput };
    }
    async updateParam(id, updateParam) {
        return this.ResultService.updateParam(id, updateParam);
    }
};
tslib_1.__decorate([
    common_1.Get(),
    tslib_1.__param(0, common_1.Query()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [product_schema_1.Result]),
    tslib_1.__metadata("design:returntype", Promise)
], ResultController.prototype, "findAll", null);
tslib_1.__decorate([
    common_1.Post(),
    tslib_1.__param(0, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [product_schema_1.Result]),
    tslib_1.__metadata("design:returntype", Promise)
], ResultController.prototype, "create", null);
tslib_1.__decorate([
    common_1.Put(':id'),
    tslib_1.__param(0, common_1.Param('id')), tslib_1.__param(1, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, product_schema_1.Result]),
    tslib_1.__metadata("design:returntype", Promise)
], ResultController.prototype, "updateParam", null);
ResultController = tslib_1.__decorate([
    swagger_1.ApiTags('Result'),
    common_1.Controller('result'),
    tslib_1.__metadata("design:paramtypes", [result_service_1.ResultService])
], ResultController);
exports.ResultController = ResultController;
//# sourceMappingURL=result.controller.js.map