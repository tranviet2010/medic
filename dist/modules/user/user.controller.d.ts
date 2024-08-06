import { UserService } from './user.service';
import { GetUsersDto } from './dto/get-users.dto';
import { User } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { ResPagingDto } from 'src/shares/dtos/pagination.dto';
export declare class UserController {
    private readonly usersService;
    constructor(usersService: UserService);
    findAll(query: GetUsersDto): Promise<ResPagingDto<User[]>>;
    createUser(createUserDto: CreateUserDto): Promise<void>;
}
