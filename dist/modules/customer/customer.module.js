"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const customer_controller_1 = require("./customer.controller");
const customer_service_1 = require("./customer.service");
const customer_schema_1 = require("./schemas/customer.schema");
let CustomerModule = class CustomerModule {
};
CustomerModule = tslib_1.__decorate([
    common_1.Module({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: customer_schema_1.Customer.name, schema: customer_schema_1.CustomerSchema }])],
        controllers: [
            customer_controller_1.CustomerController
        ],
        providers: [
            customer_service_1.CustomerService
        ],
    })
], CustomerModule);
exports.CustomerModule = CustomerModule;
//# sourceMappingURL=customer.module.js.map