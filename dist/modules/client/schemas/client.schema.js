"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientSchema = exports.Client = exports.ClientProductSchema = exports.ClientProduct = exports.CLIENT_MODEL = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = require("@nestjs/mongoose");
const class_transformer_1 = require("class-transformer");
const mongoose_2 = require("mongoose");
const client_enum_1 = require("../../../shares/enums/client.enum");
const client_policy_schema_1 = require("./client-policy.schema");
exports.CLIENT_MODEL = 'clients';
let ClientProduct = class ClientProduct {
};
tslib_1.__decorate([
    mongoose_1.Prop({
        required: false,
        type: mongoose_2.Schema.Types.ObjectId,
        index: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientProduct.prototype, "product_id", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false, type: mongoose_2.Schema.Types.Date }),
    tslib_1.__metadata("design:type", mongoose_2.Schema.Types.Date)
], ClientProduct.prototype, "end_time", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false, type: mongoose_2.Schema.Types.Date }),
    tslib_1.__metadata("design:type", mongoose_2.Schema.Types.Date)
], ClientProduct.prototype, "start_time", void 0);
ClientProduct = tslib_1.__decorate([
    mongoose_1.Schema({ _id: false })
], ClientProduct);
exports.ClientProduct = ClientProduct;
exports.ClientProductSchema = mongoose_1.SchemaFactory.createForClass(ClientProduct);
let Client = class Client {
};
tslib_1.__decorate([
    mongoose_1.Prop({ type: String }),
    tslib_1.__metadata("design:type", String)
], Client.prototype, "name", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ type: String, sparse: true }),
    tslib_1.__metadata("design:type", String)
], Client.prototype, "code", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ type: String, select: false }),
    class_transformer_1.Exclude(),
    tslib_1.__metadata("design:type", String)
], Client.prototype, "password", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ type: [String] }),
    tslib_1.__metadata("design:type", Array)
], Client.prototype, "address", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ type: String }),
    tslib_1.__metadata("design:type", String)
], Client.prototype, "full_name", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ type: String }),
    tslib_1.__metadata("design:type", String)
], Client.prototype, "japanese_name", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ type: String }),
    tslib_1.__metadata("design:type", String)
], Client.prototype, "phone", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ type: String }),
    tslib_1.__metadata("design:type", String)
], Client.prototype, "email", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ type: Date }),
    tslib_1.__metadata("design:type", Date)
], Client.prototype, "birthday", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ type: Number }),
    tslib_1.__metadata("design:type", Number)
], Client.prototype, "gender", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({
        type: [{ type: Number, enum: client_enum_1.ClientRole }],
        default: [client_enum_1.ClientRole.khach_hang],
    }),
    tslib_1.__metadata("design:type", Array)
], Client.prototype, "role", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false, type: String }),
    tslib_1.__metadata("design:type", String)
], Client.prototype, "pancake", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false, type: String }),
    tslib_1.__metadata("design:type", String)
], Client.prototype, "full_name_extra", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false, type: String }),
    tslib_1.__metadata("design:type", String)
], Client.prototype, "pancake_extra", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false, type: String, default: null }),
    tslib_1.__metadata("design:type", String)
], Client.prototype, "counselor_id", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false, type: String }),
    tslib_1.__metadata("design:type", String)
], Client.prototype, "zip_code", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false, type: String }),
    tslib_1.__metadata("design:type", String)
], Client.prototype, "image_url", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false, type: String }),
    tslib_1.__metadata("design:type", String)
], Client.prototype, "created_by", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false, type: String }),
    tslib_1.__metadata("design:type", String)
], Client.prototype, "update_by", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false, type: String }),
    tslib_1.__metadata("design:type", String)
], Client.prototype, "token_app", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false, type: Date }),
    tslib_1.__metadata("design:type", Date)
], Client.prototype, "token_deadline", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ type: Boolean, default: false }),
    tslib_1.__metadata("design:type", Boolean)
], Client.prototype, "is_verify", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ type: Boolean, default: false }),
    tslib_1.__metadata("design:type", Boolean)
], Client.prototype, "is_banned", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false, type: [{ type: exports.ClientProductSchema }] }),
    tslib_1.__metadata("design:type", Array)
], Client.prototype, "client_products", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({
        required: false,
        type: mongoose_2.Schema.Types.ObjectId,
        index: true,
        ref: client_policy_schema_1.CLIENT_POLICY_MODEL,
    }),
    tslib_1.__metadata("design:type", String)
], Client.prototype, "client_policy_id", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false, type: Boolean }),
    tslib_1.__metadata("design:type", Boolean)
], Client.prototype, "in_call", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false, type: mongoose_2.Schema.Types.Decimal128 }),
    tslib_1.__metadata("design:type", mongoose_2.Schema.Types.Decimal128)
], Client.prototype, "exp_point", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false, type: mongoose_2.Schema.Types.Decimal128 }),
    tslib_1.__metadata("design:type", mongoose_2.Schema.Types.Decimal128)
], Client.prototype, "token_points", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false, type: mongoose_2.Schema.Types.Decimal128 }),
    tslib_1.__metadata("design:type", mongoose_2.Schema.Types.Decimal128)
], Client.prototype, "reward_points", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ type: String, enum: client_enum_1.ClientStatus, default: client_enum_1.ClientStatus.INACTIVE }),
    tslib_1.__metadata("design:type", String)
], Client.prototype, "status", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ type: String }),
    tslib_1.__metadata("design:type", String)
], Client.prototype, "facebook_id", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ type: String }),
    tslib_1.__metadata("design:type", String)
], Client.prototype, "google_id", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ type: Date }),
    tslib_1.__metadata("design:type", Date)
], Client.prototype, "last_login_at", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ type: String }),
    tslib_1.__metadata("design:type", String)
], Client.prototype, "method_contact", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false, type: [{ type: String }] }),
    tslib_1.__metadata("design:type", Array)
], Client.prototype, "alien_registration_cards", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false, type: [{ type: String }] }),
    tslib_1.__metadata("design:type", Array)
], Client.prototype, "passport", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false, type: [{ type: String }] }),
    tslib_1.__metadata("design:type", Array)
], Client.prototype, "bank_card", void 0);
Client = tslib_1.__decorate([
    mongoose_1.Schema({ timestamps: true, collection: exports.CLIENT_MODEL })
], Client);
exports.Client = Client;
exports.ClientSchema = mongoose_1.SchemaFactory.createForClass(Client);
//# sourceMappingURL=client.schema.js.map