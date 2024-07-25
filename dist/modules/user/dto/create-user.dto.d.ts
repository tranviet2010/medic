import { UserRole } from 'src/shares/enums/user.enum';
export declare class CreateUserDto {
    readonly email: string;
    readonly role: UserRole[];
    readonly password: string;
    readonly name: string;
}
