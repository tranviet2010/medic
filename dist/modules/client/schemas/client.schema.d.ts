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
import { Document, Schema as MongooseSchema } from 'mongoose';
import { ClientRole, ClientStatus } from 'src/shares/enums/client.enum';
export declare const CLIENT_MODEL = "clients";
export declare class ClientProduct {
    product_id: string;
    end_time: MongooseSchema.Types.Date;
    start_time: MongooseSchema.Types.Date;
}
export declare const ClientProductSchema: MongooseSchema<ClientProduct, import("mongoose").Model<ClientProduct, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ClientProduct>;
export declare class Client {
    name: string;
    code: string;
    password: string;
    address: string[];
    full_name: string;
    japanese_name: string;
    phone: string;
    email: string;
    birthday: Date;
    gender: number;
    role: ClientRole[];
    pancake: string;
    full_name_extra: string;
    pancake_extra: string;
    counselor_id: string;
    zip_code: string;
    image_url: string;
    created_by: string;
    update_by: string;
    token_app: string;
    token_deadline: Date;
    is_verify: boolean;
    is_banned: boolean;
    client_products: ClientProduct[];
    client_policy_id: string;
    in_call: boolean;
    exp_point?: MongooseSchema.Types.Decimal128;
    token_points?: MongooseSchema.Types.Decimal128;
    reward_points?: MongooseSchema.Types.Decimal128;
    status: ClientStatus;
    facebook_id: string;
    google_id: string;
    last_login_at: Date;
    method_contact: string;
    alien_registration_cards?: string[];
    passport?: string[];
    bank_card?: string[];
}
export declare type ClientDocument = Client & Document;
export declare const ClientSchema: MongooseSchema<Client, import("mongoose").Model<Client, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Client>;
