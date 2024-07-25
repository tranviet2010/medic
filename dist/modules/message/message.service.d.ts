import { CreateMessageDto } from './dto/create-message.dto';
import { Message, MessageDocument } from './schemas/message.schema';
import { Model } from 'mongoose';
export declare class MessageService {
    private messageModel;
    constructor(messageModel: Model<MessageDocument>);
    createMessage(messageDto: CreateMessageDto): Promise<Message>;
}
