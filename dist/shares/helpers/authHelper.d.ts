import { PayloadAccessTokenDto } from '../dtos/payload-access-token.dto';
import { ExecutionContext } from '@nestjs/common';
export interface AuthMessage {
    timestamp: number;
    method: string | undefined;
    url: string | undefined;
    data: unknown;
    query: unknown;
}
export declare const serializeMessage: (message: AuthMessage) => string;
export declare const decodeToken: (ctx: ExecutionContext) => PayloadAccessTokenDto;
