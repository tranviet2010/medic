import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema, Types } from 'mongoose';


export const DOCUMENT_MODEL = 'document';


@Schema({ timestamps: true, collection: DOCUMENT_MODEL })
export class Doc {
    @Prop({ required: true })
    name: string;

    @Prop({ required: false })
    link: string;

    @Prop({ required: false })
    note: string;
}

export type DocDocument = Doc & Document;

export const DocSchema = SchemaFactory.createForClass(Doc);



