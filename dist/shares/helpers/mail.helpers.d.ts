export declare class EmailService {
    sendEmail(emailAddress: string, subject: string, htmlBody: string, from?: string): Promise<any>;
    SESSendEmail(emailAddress: string, subject: string, htmlBody: string, from?: string): Promise<void>;
}
