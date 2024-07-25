"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = exports.User = exports.USER_MODEL = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = require("@nestjs/mongoose");
const class_transformer_1 = require("class-transformer");
const user_enum_1 = require("../../../shares/enums/user.enum");
exports.USER_MODEL = 'users';
let User = class User {
};
tslib_1.__decorate([
    mongoose_1.Prop({ type: String }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "name", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ type: String, sparse: true }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "code", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ type: String, select: false }),
    class_transformer_1.Exclude(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "password", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ type: String }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "address", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ type: String }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "full_name", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ type: String }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "user_name", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ type: String }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "japanese_name", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ type: String }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "phone", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ type: String }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "email", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ type: Date }),
    tslib_1.__metadata("design:type", Date)
], User.prototype, "birthday", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ type: Boolean }),
    tslib_1.__metadata("design:type", Number)
], User.prototype, "gender", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ type: [{ type: Number, enum: user_enum_1.UserRole }], required: true }),
    tslib_1.__metadata("design:type", Array)
], User.prototype, "role", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false, type: String }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "pancake", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false, type: String }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "full_name_extra", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false, type: String }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "pancake_extra", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false, type: String, default: null }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "counselor_id", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false, type: String, default: null }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "source_id", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false, type: String }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "zip_code", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false, type: String }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "image_url", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false, type: String }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "created_by", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false, type: String }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "update_by", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false, type: String }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "token_app", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false, type: Date }),
    tslib_1.__metadata("design:type", Date)
], User.prototype, "token_deadline", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false, type: String, default: null }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "department_id", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ type: Boolean, default: false }),
    tslib_1.__metadata("design:type", Boolean)
], User.prototype, "is_verify", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ type: Boolean, default: false }),
    tslib_1.__metadata("design:type", Boolean)
], User.prototype, "is_banned", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false, type: Boolean }),
    tslib_1.__metadata("design:type", Boolean)
], User.prototype, "in_call", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ type: String, enum: user_enum_1.UserStatus, default: user_enum_1.UserStatus.INACTIVE }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "status", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ type: Date }),
    tslib_1.__metadata("design:type", Date)
], User.prototype, "last_login_at", void 0);
User = tslib_1.__decorate([
    mongoose_1.Schema({ timestamps: true, collection: exports.USER_MODEL })
], User);
exports.User = User;
exports.UserSchema = mongoose_1.SchemaFactory.createForClass(User);
//# sourceMappingURL=user.schema.js.map