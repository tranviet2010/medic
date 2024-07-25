"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const message_controller_1 = require("./message.controller");
const message_service_1 = require("./message.service");
const mongoose_1 = require("@nestjs/mongoose");
const message_schema_1 = require("./schemas/message.schema");
let MessageModule = class MessageModule {
};
MessageModule = tslib_1.__decorate([
    common_1.Module({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: message_schema_1.Message.name, schema: message_schema_1.MessageSchema }])],
        controllers: [message_controller_1.MessageController],
        providers: [message_service_1.MessageService],
        exports: [message_service_1.MessageService],
    })
], MessageModule);
exports.MessageModule = MessageModule;
//# sourceMappingURL=message.module.js.map