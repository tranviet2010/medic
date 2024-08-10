import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema, Types } from 'mongoose';


export const RESULT_MODEL = 'result';

interface ResultItem {
    key: string;
    value: number;
  }

@Schema({ timestamps: true, collection: RESULT_MODEL })
export class Result {
    @Prop({ required: true })
    type_result: string;
    // C - T - L

    @Prop({ required: true })
    name: string; // nguoi bao tro

    @Prop({ required: false })
    date_check: string; 

    @Prop({ required: false })
    sponsor: string;  // ho ten

    @Prop({ required: false })
    height: string;  // ho ten

    @Prop({ required: false })
    male: string; 

    @Prop({ required: false })
    weight: string;  // ho ten

    @Prop({ required: false })
    phone: string;

    @Prop({ required: false })
    dob: string;

    @Prop({ required: false })
    number_child: string;

    @Prop({ required: false })
    height_femur: string;

    @Prop({ required: false })
    height_nose: string;

    @Prop({ required: false })
    result: string;

    @Prop({ required: false })
    address: string;

    @Prop({ required: false })
    email: string;

    @Prop({ required: false })
    file: string;

    @Prop({ required: false })
    phatho: string;

    @Prop({ required: false })
    note: string;
}

export type ResultDocument = Result & Document;

export const ResultSchema = SchemaFactory.createForClass(Result);



