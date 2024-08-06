import { ClientService } from './client.service';
import { SignUpByCodeDto } from './dto/sign-up-by-code.dto';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import ChangePasswordByCodeDto from './dto/change-password-by-code.dto';
import ChangePasswordDto from './dto/change-password.dto';
import { GetClientByPhoneOrderDto, GetClientsDto } from './dto/get-clients.dto';
import { ResPagingDto } from 'src/shares/dtos/pagination.dto';
import { Client } from './schemas/client.schema';
import { CreateClientDto } from './dto/create-client.dto';
export declare class ClientController {
    private readonly clientService;
    constructor(clientService: ClientService);
    searchClientInOrder(query: GetClientByPhoneOrderDto): Promise<any>;
    signUp(createClientDto: CreateClientDto): Promise<void>;
    activateAccount(accountId: string): Promise<void>;
    signUpByCode(signUpByCodeDto: SignUpByCodeDto): Promise<void>;
    forgotPassword(forgotPasswordDto: ForgotPasswordDto): Promise<void>;
    changePasswordByCode(changePasswordByCodeDto: ChangePasswordByCodeDto): Promise<void>;
    changePassword(changePasswordDto: ChangePasswordDto): Promise<void>;
    findAll(query: GetClientsDto): Promise<ResPagingDto<Client[]>>;
    createUser(createUserDto: CreateClientDto): Promise<{
        message: string;
        user: Client;
    }>;
}
