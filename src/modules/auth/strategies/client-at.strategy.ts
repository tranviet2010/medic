import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JWT_CONSTANTS } from '../auth.constants';
import express from 'express';
import { AuthService } from '../auth.service';
import { httpErrors } from 'src/shares/exceptions';
import { PayloadAccessTokenDto } from 'src/shares/dtos/payload-access-token.dto';
import { ClientService } from 'src/modules/client/client.service';

@Injectable()
export class ClientAtStrategy extends PassportStrategy(Strategy, 'client-jwt') {
  constructor(private readonly clientService: ClientService, private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: JWT_CONSTANTS.clientAccessTokenSecret,
      passReqToCallback: true,
    });
  }

  
}
