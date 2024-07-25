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
export declare const HEIGHT_MODEL = "height";
export declare class Height {
    age: number;
    month_age: number;
    number_day: number;
    up_height3: string;
    up_height2: string;
    up_height1: string;
    height: string;
    dow_height3: string;
    dow_height2: string;
    dow_height1: string;
    up_weight3: string;
    up_weight2: string;
    up_weight1: string;
    weight: string;
    dow_weight3: string;
    dow_weight2: string;
    dow_weight1: string;
}
export declare type HeightDocument = Height & Document;
export declare const HeightSchema: MongooseSchema<Height, import("mongoose").Model<Height, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Height>;
