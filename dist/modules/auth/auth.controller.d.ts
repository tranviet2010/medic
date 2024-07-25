import { ResponseRefreshTokenDto } from './dto/response-refresh-token.dto';
import { ResponseLogin } from 'src/modules/auth/dto/response-login.dto';
import { PayloadRefreshTokenDto } from './dto/payload-refresh-token.dto';
import { AuthService } from 'src/modules/auth/auth.service';
import { LoginDto } from 'src/modules/auth/dto/login.dto';
import { UserService } from '../user/user.service';
import { User } from '@sentry/node';
export declare class AuthController {
    private readonly authService;
    private readonly userService;
    constructor(authService: AuthService, userService: UserService);
    currentUser(userId: string): Promise<User>;
    userLogin(loginDto: LoginDto): Promise<ResponseLogin>;
    userRefreshAccessToken(user: PayloadRefreshTokenDto): Promise<ResponseRefreshTokenDto>;
}
