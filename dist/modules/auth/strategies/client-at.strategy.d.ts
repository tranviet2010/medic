import { Strategy } from 'passport-jwt';
import express from 'express';
import { AuthService } from '../auth.service';
import { PayloadAccessTokenDto } from 'src/shares/dtos/payload-access-token.dto';
import { ClientService } from 'src/modules/client/client.service';
declare const ClientAtStrategy_base: new (...args: any[]) => Strategy;
export declare class ClientAtStrategy extends ClientAtStrategy_base {
    private readonly clientService;
    private readonly authService;
    constructor(clientService: ClientService, authService: AuthService);
    validate(req: express.Request, args: PayloadAccessTokenDto): Promise<any>;
}
export {};
