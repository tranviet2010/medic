"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientPolicySchema = exports.ClientPolicy = exports.CLIENT_POLICY_MODEL = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = require("@nestjs/mongoose");
exports.CLIENT_POLICY_MODEL = 'client_policy';
let ClientPolicy = class ClientPolicy {
};
tslib_1.__decorate([
    mongoose_1.Prop({ type: String }),
    tslib_1.__metadata("design:type", String)
], ClientPolicy.prototype, "name", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false, type: String }),
    tslib_1.__metadata("design:type", String)
], ClientPolicy.prototype, "condition", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false, type: String }),
    tslib_1.__metadata("design:type", String)
], ClientPolicy.prototype, "upgrade_rewards", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false, type: String }),
    tslib_1.__metadata("design:type", String)
], ClientPolicy.prototype, "discount_policy", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false, type: String }),
    tslib_1.__metadata("design:type", String)
], ClientPolicy.prototype, "birthday_policy", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false, type: String }),
    tslib_1.__metadata("design:type", String)
], ClientPolicy.prototype, "return_exchange_policy", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false, type: String }),
    tslib_1.__metadata("design:type", String)
], ClientPolicy.prototype, "warranty_policy", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false, type: String }),
    tslib_1.__metadata("design:type", String)
], ClientPolicy.prototype, "maintenance_requirement", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false, type: String }),
    tslib_1.__metadata("design:type", String)
], ClientPolicy.prototype, "member_day_promotion", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false, type: String }),
    tslib_1.__metadata("design:type", String)
], ClientPolicy.prototype, "free_shipping_offer", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false, type: String }),
    tslib_1.__metadata("design:type", String)
], ClientPolicy.prototype, "extended_benefits", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false, type: String }),
    tslib_1.__metadata("design:type", String)
], ClientPolicy.prototype, "top_up_upgrade_rewards", void 0);
ClientPolicy = tslib_1.__decorate([
    mongoose_1.Schema({ timestamps: true, collection: exports.CLIENT_POLICY_MODEL })
], ClientPolicy);
exports.ClientPolicy = ClientPolicy;
exports.ClientPolicySchema = mongoose_1.SchemaFactory.createForClass(ClientPolicy);
//# sourceMappingURL=client-policy.schema.js.map