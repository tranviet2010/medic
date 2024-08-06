import { Strategy } from 'passport-jwt';
import { Request } from 'express';
import { PayloadRefreshTokenDto } from '../dto/payload-refresh-token.dto';
declare const ClientRtStrategy_base: new (...args: any[]) => Strategy;
export declare class ClientRtStrategy extends ClientRtStrategy_base {
    constructor();
    validate(req: Request, payload: PayloadRefreshTokenDto): Promise<any>;
}
export {};
