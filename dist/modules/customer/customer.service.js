"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerService = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const customer_schema_1 = require("./schemas/customer.schema");
let CustomerService = class CustomerService {
    constructor(customerModel) {
        this.customerModel = customerModel;
    }
    async create(param) {
        const createdCat = new this.customerModel(param);
        createdCat.save();
    }
    async findAll(query) {
        let value = await this.customerModel.find(query).exec();
        return value;
    }
    async updateCustomer(id, updateParam) {
        const nation = await this.customerModel.findByIdAndUpdate(id, updateParam, { new: true });
        if (!nation) {
            throw new common_1.NotFoundException("user with id ${id} not found");
        }
        return nation;
    }
};
CustomerService = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__param(0, mongoose_2.InjectModel(customer_schema_1.Customer.name)),
    tslib_1.__metadata("design:paramtypes", [mongoose_1.Model])
], CustomerService);
exports.CustomerService = CustomerService;
//# sourceMappingURL=customer.service.js.map