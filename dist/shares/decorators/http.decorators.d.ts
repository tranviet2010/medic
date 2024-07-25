import { UserRole } from '../enums/user.enum';
import { ClientRole } from '../enums/client.enum';
export declare const Roles: (roles: number[]) => MethodDecorator & ClassDecorator;
export declare const ClientAuth: (clientRole?: ClientRole[]) => MethodDecorator & ClassDecorator;
export declare const UserAuth: (userRole?: UserRole[]) => MethodDecorator & ClassDecorator;
