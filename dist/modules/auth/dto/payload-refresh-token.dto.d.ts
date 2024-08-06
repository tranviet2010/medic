import { ObjectId } from 'mongoose';
export declare class PayloadRefreshTokenDto {
    userId: ObjectId;
    date: number;
    iat: number;
    exp: number;
    refreshToken: string;
}
