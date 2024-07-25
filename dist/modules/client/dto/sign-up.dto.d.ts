export declare class SignUpDto {
    readonly email: string;
    readonly password: string;
    readonly name?: string;
    readonly birthday?: Date;
    readonly gender?: number;
}
export interface SignUpInterface {
    email?: string;
    password?: string;
    name?: string;
    code?: string;
    birthday?: Date;
    gender?: number;
}
export interface SignUpCacheInterface extends SignUpInterface {
    attempt: number;
}
