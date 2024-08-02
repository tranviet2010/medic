import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema, Types } from 'mongoose';


export const PRODUCT_MODEL = 'product';


@Schema({ timestamps: true, collection: PRODUCT_MODEL })
export class Product {
    @Prop({ required: true })
    name: string;

    @Prop({ required: false })
    buy: string;

    @Prop({ required: false })
    dis: string;

    @Prop({ required: false })
    image: string;

    @Prop({ required: false })
    note: string;
}

export type ProductDocument = Product & Document;

export const ProductSchema = SchemaFactory.createForClass(Product);



