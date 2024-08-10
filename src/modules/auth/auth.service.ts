import {
  CACHE_MANAGER,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  BadRequestException,
  UnauthorizedException,
  ForbiddenException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Cache } from 'cache-manager';
import { USER_AUTH_CACHE_PREFIX, CLIENT_AUTH_CACHE_PREFIX, JWT_CONSTANTS } from 'src/modules/auth/auth.constants';
import { LoginDto } from 'src/modules/auth/dto/login.dto';
import { ResponseLogin } from 'src/modules/auth/dto/response-login.dto';
import { ResponseRefreshTokenDto } from './dto/response-refresh-token.dto';
import { PayloadRefreshTokenDto } from './dto/payload-refresh-token.dto';
import { httpErrors } from 'src/shares/exceptions';
import * as config from 'config';
import { HttpService } from '@nestjs/axios';
import { validateHash } from 'src/shares/helpers/bcrypt';
import { User } from '../user/schemas/user.schema';
import { PayloadAccessTokenDto } from 'src/shares/dtos/payload-access-token.dto';
import { Client } from '../client/schemas/client.schema';
import { UserService } from '../user/user.service';
const baseFacebookUrl = config.get<string>('facebook.graph_api');
const baseGoogleUrl = config.get<string>('google.base_api');
@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private jwtService: JwtService,
  ) { }

  async userLogin(loginDto: LoginDto): Promise<ResponseLogin> {
    const { phone, password } = loginDto;
    const user = await this.userService.findOne({ phone }, true);
    console.log("user",user);
    console.log("user",password);
    if (!user) {
      throw new BadRequestException(httpErrors.ACCOUNT_NOT_FOUND);
    }

    if (user?.password != password) {
      throw new UnauthorizedException(httpErrors.UNAUTHORIZED);
    }

    const [accessToken, refreshToken] = await Promise.all([
      this.generateUserAccessToken(user),
      this.generateUserRefreshToken(user),
    ]);

    return {
      accessToken,
      refreshToken,
      id: user._id,
      email: user.email,
      phone: user.phone,
      role: user.role,
      iat: Date.now(),
      exp: Date.now() + JWT_CONSTANTS.userAccessTokenExpiry,
    };
  }

  
  async generateUserAccessToken(user: User): Promise<string> {
    const { role } = user;
    return this.jwtService.signAsync(
      {
        userId: user['_id'],
        role: role,
        date: Date.now(),
      },
      {
        secret: JWT_CONSTANTS.userAccessTokenSecret,
        expiresIn: JWT_CONSTANTS.userAccessTokenExpiry,
      },
    );
  }
  async generateUserRefreshToken(user: User): Promise<string> {
    const { role } = user;
    const refreshToken = await this.jwtService.signAsync(
      {
        userId: user['_id'],
        role: role,
        date: Date.now(),
      },
      {
        secret: JWT_CONSTANTS.userRefreshTokenSecret,
        expiresIn: JWT_CONSTANTS.userRefreshTokenExpiry,
      },
    );
    await this.cacheManager.set<string>(`${CLIENT_AUTH_CACHE_PREFIX}${user['_id'].toString()}`, refreshToken, {
      ttl: JWT_CONSTANTS.userRefreshTokenExpiry,
    });

    return refreshToken;
  }
}
