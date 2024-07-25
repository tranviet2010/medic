"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const message_schema_1 = require("./schemas/message.schema");
const mongoose_2 = require("mongoose");
let MessageService = class MessageService {
    constructor(messageModel) {
        this.messageModel = messageModel;
    }
    async createMessage(messageDto) {
        const { sender_id, conversation_id, content } = messageDto;
        return this.messageModel.create({
            sender_id,
            conversation_id,
            content,
        });
    }
};
MessageService = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__param(0, mongoose_1.InjectModel(message_schema_1.Message.name)),
    tslib_1.__metadata("design:paramtypes", [mongoose_2.Model])
], MessageService);
exports.MessageService = MessageService;
//# sourceMappingURL=message.service.js.map