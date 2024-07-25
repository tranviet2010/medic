import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';


export const PARTNER_MODEL = 'partner';

@Schema({ timestamps: true, collection: PARTNER_MODEL })
export class Partner {
    @Prop({ required: true })
    name: string;

    @Prop({ required: false })
    phone: string;

    @Prop({ required: true })
    company_name: string;

    @Prop({required:false})
    address:string;

    @Prop({required:false})
    email:string;

    @Prop({required:false})
    note:string;
}

export type PartnerDocument = Partner & Document;

export const PartnerSchema = SchemaFactory.createForClass(Partner);



