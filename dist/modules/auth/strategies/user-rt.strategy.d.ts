import { Strategy } from 'passport-jwt';
import { Request } from 'express';
import { PayloadRefreshTokenDto } from '../dto/payload-refresh-token.dto';
declare const UserRtStrategy_base: new (...args: any[]) => Strategy;
export declare class UserRtStrategy extends UserRtStrategy_base {
    constructor();
    validate(req: Request, payload: PayloadRefreshTokenDto): Promise<any>;
}
export {};
