import { JwtService } from '@nestjs/jwt';
import { Cache } from 'cache-manager';
import { LoginDto } from 'src/modules/auth/dto/login.dto';
import { ResponseLogin } from 'src/modules/auth/dto/response-login.dto';
import { ResponseRefreshTokenDto } from './dto/response-refresh-token.dto';
import { PayloadRefreshTokenDto } from './dto/payload-refresh-token.dto';
import { HttpService } from '@nestjs/axios';
import { User } from '../user/schemas/user.schema';
import { PayloadAccessTokenDto } from 'src/shares/dtos/payload-access-token.dto';
import { Client } from '../client/schemas/client.schema';
import { UserService } from '../user/user.service';
export declare class AuthService {
    private userService;
    private cacheManager;
    private jwtService;
    private httpService;
    constructor(userService: UserService, cacheManager: Cache, jwtService: JwtService, httpService: HttpService);
    userLogin(loginDto: LoginDto): Promise<ResponseLogin>;
    UserGetAccessToken(payload: PayloadRefreshTokenDto): Promise<ResponseRefreshTokenDto>;
    generateUserAccessToken(user: User): Promise<string>;
    generateClientAccessToken(client: Client): Promise<string>;
    generateUserRefreshToken(user: User): Promise<string>;
    generateClientRefreshToken(user: Client): Promise<string>;
    decodeAccessToken(accessToken: string): Promise<PayloadAccessTokenDto | any>;
}
