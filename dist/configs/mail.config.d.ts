interface IEmailConfig {
    auth: {
        user: string;
        pass: string;
    };
    from: string;
    service: string;
    enable: boolean;
}
export declare const mailConfig: IEmailConfig;
export {};
