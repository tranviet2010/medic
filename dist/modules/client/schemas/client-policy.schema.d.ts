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
export declare const CLIENT_POLICY_MODEL = "client_policy";
export declare class ClientPolicy {
    name: string;
    condition: string;
    upgrade_rewards: string;
    discount_policy: string;
    birthday_policy: string;
    return_exchange_policy: string;
    warranty_policy: string;
    maintenance_requirement: string;
    member_day_promotion: string;
    free_shipping_offer: string;
    extended_benefits: string;
    top_up_upgrade_rewards: string;
}
export declare type ClientPolicyDocument = ClientPolicy & Document;
export declare const ClientPolicySchema: import("mongoose").Schema<ClientPolicy, import("mongoose").Model<ClientPolicy, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ClientPolicy>;
