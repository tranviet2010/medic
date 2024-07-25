import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';


export const PARAM_MODEL = 'param';

@Schema({ timestamps: true, collection: PARAM_MODEL })
export class Params {
    @Prop({ required: true })
    title: string;

    @Prop({ required: false, type: String })
    images: string;

    @Prop({ required: true })
    content: string;

    @Prop({ required: true })
    code: string;

    @Prop({ required: true })
    type: string;

    @Prop({ required: true,type:Number })
    display: string;   //1 hien thi, 0 khong hien thi
    
    @Prop({ required: true })
    code_menu: string;

    @Prop({ required: true,default:1 })
    phan_he: string;

    @Prop({ required: true })
    note: string;

    @Prop({ required: false })
    url: string;
    
}

export type ParamDocument = Params & Document;

export const ParamSchema = SchemaFactory.createForClass(Params);



