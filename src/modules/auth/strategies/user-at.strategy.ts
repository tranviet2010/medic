import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JWT_CONSTANTS } from '../auth.constants';
import express from 'express';
import { AuthService } from '../auth.service';
import { UserService } from 'src/modules/user/user.service';
import { httpErrors } from 'src/shares/exceptions';
import { PayloadAccessTokenDto } from 'src/shares/dtos/payload-access-token.dto';

@Injectable()
export class UserAtStrategy extends PassportStrategy(Strategy, 'user-jwt') {
  constructor(private readonly userService: UserService, private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: JWT_CONSTANTS.userAccessTokenSecret,
      passReqToCallback: true,
    });
  }

}
