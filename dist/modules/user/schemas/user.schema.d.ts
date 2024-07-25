/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Document } from 'mongoose';
import { UserRole, UserStatus } from 'src/shares/enums/user.enum';
export declare const USER_MODEL = "users";
export declare class User {
    name: string;
    code: string;
    password: string;
    address: string;
    full_name: string;
    user_name: string;
    japanese_name: string;
    phone: string;
    email: string;
    birthday: Date;
    gender: number;
    role: UserRole[];
    pancake: string;
    full_name_extra: string;
    pancake_extra: string;
    counselor_id: string;
    source_id: string;
    zip_code: string;
    image_url: string;
    created_by: string;
    update_by: string;
    token_app: string;
    token_deadline: Date;
    department_id: string;
    is_verify: boolean;
    is_banned: boolean;
    in_call: boolean;
    status: UserStatus;
    last_login_at: Date;
}
export declare type UserDocument = User & Document;
export declare const UserSchema: import("mongoose").Schema<User, import("mongoose").Model<User, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, User>;
