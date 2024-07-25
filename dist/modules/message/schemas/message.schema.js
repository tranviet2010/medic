"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageSchema = exports.Message = exports.MESSAGES_MODEL = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const class_transformer_1 = require("class-transformer");
const user_schema_1 = require("../../user/schemas/user.schema");
const conversation_schema_1 = require("./conversation.schema");
exports.MESSAGES_MODEL = 'messages';
let Message = class Message {
};
tslib_1.__decorate([
    class_transformer_1.Transform(({ value }) => value.toString()),
    tslib_1.__metadata("design:type", Object)
], Message.prototype, "_id", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({
        required: true,
        unique: true,
        type: mongoose_2.SchemaTypes.ObjectId,
        ref: user_schema_1.USER_MODEL,
    }),
    tslib_1.__metadata("design:type", String)
], Message.prototype, "sender_id", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({
        required: true,
        unique: true,
        type: mongoose_2.SchemaTypes.ObjectId,
        ref: conversation_schema_1.CONVERSATIONS_MODEL,
    }),
    tslib_1.__metadata("design:type", String)
], Message.prototype, "conversation_id", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ type: String }),
    tslib_1.__metadata("design:type", String)
], Message.prototype, "content", void 0);
Message = tslib_1.__decorate([
    mongoose_1.Schema({ timestamps: true, collection: exports.MESSAGES_MODEL })
], Message);
exports.Message = Message;
exports.MessageSchema = mongoose_1.SchemaFactory.createForClass(Message);
exports.MessageSchema.virtual('sender', {
    ref: user_schema_1.USER_MODEL,
    localField: 'sender_id',
    foreignField: '_id',
    justOne: true,
});
exports.MessageSchema.virtual('conversation', {
    ref: user_schema_1.USER_MODEL,
    localField: 'conversation_id',
    foreignField: '_id',
    justOne: true,
});
//# sourceMappingURL=message.schema.js.map