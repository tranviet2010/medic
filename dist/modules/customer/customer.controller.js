"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerController = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const http_decorators_1 = require("../../shares/decorators/http.decorators");
const user_enum_1 = require("../../shares/enums/user.enum");
const customer_service_1 = require("./customer.service");
const customer_schema_1 = require("./schemas/customer.schema");
let CustomerController = class CustomerController {
    constructor(customerService) {
        this.customerService = customerService;
    }
    async findAll(query) {
        return this.customerService.findAll(query);
    }
    async create(crud) {
        await this.customerService.create(crud);
    }
    async updateParam(id, updateCustomer) {
        return this.customerService.updateCustomer(id, updateCustomer);
    }
};
tslib_1.__decorate([
    common_1.Get(),
    tslib_1.__param(0, common_1.Query()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomerController.prototype, "findAll", null);
tslib_1.__decorate([
    common_1.Post(),
    tslib_1.__param(0, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [customer_schema_1.Customer]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomerController.prototype, "create", null);
tslib_1.__decorate([
    common_1.Put(':id'),
    tslib_1.__param(0, common_1.Param('id')), tslib_1.__param(1, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, customer_schema_1.Customer]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomerController.prototype, "updateParam", null);
CustomerController = tslib_1.__decorate([
    swagger_1.ApiTags('Customer'),
    common_1.Controller('customer'),
    tslib_1.__metadata("design:paramtypes", [customer_service_1.CustomerService])
], CustomerController);
exports.CustomerController = CustomerController;
//# sourceMappingURL=customer.controller.js.map