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
declare class UpHeight {
    up_height3: string;
    up_height2: string;
    up_height1: string;
}
declare class DowHeight {
    dow_height3: string;
    dow_height2: string;
    dow_height1: string;
}
declare class UpWeight {
    up_weight3: string;
    up_weight2: string;
    up_weight1: string;
}
declare class DowWeight {
    dow_weight3: string;
    dow_weight2: string;
    dow_weight1: string;
}
export declare class Height {
    age: number;
    month_age: number;
    number_day: number;
    up_height: UpHeight;
    height: string;
    dow_height: DowHeight;
    up_weight: UpWeight;
    weight: string;
    dow_weight: DowWeight;
}
export declare type HeightDocument = Height & Document;
export declare const HeightSchema: MongooseSchema<Height, import("mongoose").Model<Height, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Height>;
export declare const UpHeightSchema: MongooseSchema<UpHeight, import("mongoose").Model<UpHeight, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, UpHeight>;
export declare const DowHeightSchema: MongooseSchema<DowHeight, import("mongoose").Model<DowHeight, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, DowHeight>;
export declare const UpWeightSchema: MongooseSchema<UpWeight, import("mongoose").Model<UpWeight, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, UpWeight>;
export declare const DowWeightSchema: MongooseSchema<DowWeight, import("mongoose").Model<DowWeight, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, DowWeight>;
export {};
