import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Type } from 'class-transformer';
import { IsString } from 'class-validator';
import { Document, Schema as MongooseSchema, Types } from 'mongoose';


export const COURSE_MODEL = 'course';

@Schema({ _id: false })
class Product {
    @Prop({ type: String })
    @IsString()
    name_product: string;

    @Prop({ type: String })
    @IsString()
    quantity: string;

    @Prop({ type: String })
    @IsString()
    exp: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);


@Schema({ timestamps: true, collection: COURSE_MODEL })
export class Course {
    @Prop({ required: true })
    name: string;

    @Prop({ required: false })
    group: string;

    @Prop({ required: false })
    male: string;

    @Prop({ required: false })
    age: string;

    @Prop({ required: false })
    define: string;

    @Prop({ required: false })
    note: string;

    @Prop({ type: [ProductSchema], required: false })
    @Type(() => Product)
    products: Product[];


}

export type CourseDocument = Course & Document;

export const CourseSchema = SchemaFactory.createForClass(Course);



