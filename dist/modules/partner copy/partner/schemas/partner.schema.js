"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartnerSchema = exports.Partner = exports.PARTNER_MODEL = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = require("@nestjs/mongoose");
exports.PARTNER_MODEL = 'nation';
let Partner = class Partner {
};
tslib_1.__decorate([
    mongoose_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", String)
], Partner.prototype, "fullname", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", String)
], Partner.prototype, "phone", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", Number)
], Partner.prototype, "company_name", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false }),
    tslib_1.__metadata("design:type", String)
], Partner.prototype, "address", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false }),
    tslib_1.__metadata("design:type", String)
], Partner.prototype, "email", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false }),
    tslib_1.__metadata("design:type", String)
], Partner.prototype, "note", void 0);
Partner = tslib_1.__decorate([
    mongoose_1.Schema({ timestamps: true, collection: exports.PARTNER_MODEL })
], Partner);
exports.Partner = Partner;
exports.PartnerSchema = mongoose_1.SchemaFactory.createForClass(Partner);
//# sourceMappingURL=partner.schema.js.map