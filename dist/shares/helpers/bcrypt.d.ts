export declare const generateHash: (password: string) => Promise<{
    salt: string;
    hashPassword: string;
}>;
export declare const validateHash: (password: string, hash: string) => Promise<boolean>;
