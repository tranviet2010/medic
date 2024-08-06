"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerSchema = exports.Customer = exports.CUSTOMER_MODEL = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const agent_schema_1 = require("../../agent/schemas/agent.schema");
exports.CUSTOMER_MODEL = 'customer';
let Customer = class Customer {
};
tslib_1.__decorate([
    mongoose_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", String)
], Customer.prototype, "name", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", String)
], Customer.prototype, "phone", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false }),
    tslib_1.__metadata("design:type", String)
], Customer.prototype, "company_name", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false }),
    tslib_1.__metadata("design:type", String)
], Customer.prototype, "address", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false }),
    tslib_1.__metadata("design:type", String)
], Customer.prototype, "email", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false }),
    tslib_1.__metadata("design:type", String)
], Customer.prototype, "note", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ type: mongoose_2.Types.ObjectId, ref: 'Agent', required: true }),
    tslib_1.__metadata("design:type", agent_schema_1.Agent)
], Customer.prototype, "agent", void 0);
Customer = tslib_1.__decorate([
    mongoose_1.Schema({ timestamps: true, collection: exports.CUSTOMER_MODEL })
], Customer);
exports.Customer = Customer;
exports.CustomerSchema = mongoose_1.SchemaFactory.createForClass(Customer);
//# sourceMappingURL=customer.schema.js.map