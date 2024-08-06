import { Cache } from 'cache-manager';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { GetUsersDto } from './dto/get-users.dto';
import { GetUserDto } from './dto/get-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { ResPagingDto } from 'src/shares/dtos/pagination.dto';
export declare class UserService {
    private userModel;
    private cacheManager;
    constructor(userModel: Model<UserDocument>, cacheManager: Cache);
    createUser(createUserDto: CreateUserDto): Promise<UserDocument>;
    findAll(getUsersDto: GetUsersDto): Promise<ResPagingDto<User[]>>;
    findOne(condition: GetUserDto, selectPassword?: boolean): Promise<UserDocument>;
    findById(_id: string): Promise<UserDocument>;
}
