import { Job } from 'bull';
export declare class MailProcessor {
    private readonly logger;
    private readonly mailService;
    sendForgotPasswordEmail(job: Job): Promise<number>;
    sendSignUpEmail(job: Job): Promise<number>;
}
