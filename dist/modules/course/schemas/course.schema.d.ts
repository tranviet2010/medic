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
export declare const COURSE_MODEL = "course";
declare class Product {
    name_product: string;
    quantity: string;
    exp: string;
}
export declare const ProductSchema: MongooseSchema<Product, import("mongoose").Model<Product, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Product>;
export declare class Course {
    name: string;
    group: string;
    male: string;
    age: string;
    define: string;
    note: string;
    products: Product[];
}
export declare type CourseDocument = Course & Document;
export declare const CourseSchema: MongooseSchema<Course, import("mongoose").Model<Course, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Course>;
export {};
