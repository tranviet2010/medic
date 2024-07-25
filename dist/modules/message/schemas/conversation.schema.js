"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversationSchema = exports.Conversation = exports.CONVERSATIONS_MODEL = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const class_transformer_1 = require("class-transformer");
const database_config_1 = require("../../../configs/database.config");
exports.CONVERSATIONS_MODEL = 'conversations';
let Conversation = class Conversation {
};
tslib_1.__decorate([
    class_transformer_1.Transform(({ value }) => value.toString()),
    tslib_1.__metadata("design:type", Object)
], Conversation.prototype, "_id", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false, type: [mongoose_2.SchemaTypes.ObjectId] }),
    tslib_1.__metadata("design:type", Array)
], Conversation.prototype, "members", void 0);
Conversation = tslib_1.__decorate([
    mongoose_1.Schema(Object.assign(Object.assign({}, database_config_1.Options), { collection: exports.CONVERSATIONS_MODEL }))
], Conversation);
exports.Conversation = Conversation;
exports.ConversationSchema = mongoose_1.SchemaFactory.createForClass(Conversation);
//# sourceMappingURL=conversation.schema.js.map