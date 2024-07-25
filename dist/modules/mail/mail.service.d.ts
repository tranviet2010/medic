import { MailerService } from '@nestjs-modules/mailer';
import { Queue } from 'bull';
import { Cache } from 'cache-manager';
import { SignUpInterface } from '../client/dto/sign-up.dto';
export declare class MailService {
    private mailerService;
    private readonly queue;
    private cacheManager;
    constructor(mailerService: MailerService, queue: Queue, cacheManager: Cache);
    sendForgotPasswordEmailJob(email: string): Promise<void>;
    sendForgotPasswordEmail(email: string): Promise<void>;
    sendSignUpEmailJob(signUpInterface: SignUpInterface): Promise<void>;
    sendSignUpEmail(signUpInterface: SignUpInterface): Promise<void>;
}
