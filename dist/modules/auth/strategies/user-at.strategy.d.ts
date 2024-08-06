import { Strategy } from 'passport-jwt';
import express from 'express';
import { AuthService } from '../auth.service';
import { UserService } from 'src/modules/user/user.service';
import { PayloadAccessTokenDto } from 'src/shares/dtos/payload-access-token.dto';
declare const UserAtStrategy_base: new (...args: any[]) => Strategy;
export declare class UserAtStrategy extends UserAtStrategy_base {
    private readonly userService;
    private readonly authService;
    constructor(userService: UserService, authService: AuthService);
    validate(req: express.Request, args: PayloadAccessTokenDto): Promise<any>;
}
export {};
