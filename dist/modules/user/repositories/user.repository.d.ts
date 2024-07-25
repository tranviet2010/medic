import { Model } from 'mongoose';
import { UserDocument } from '../schemas/user.schema';
export declare class UserRepository {
    private readonly userModel;
    constructor(userModel: Model<UserDocument>);
}
