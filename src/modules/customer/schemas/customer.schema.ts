import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema, Types } from 'mongoose';
import { Partner } from '../../partner/schemas/partner.schema'
import { Agent } from 'src/modules/agent/schemas/agent.schema';


export const CUSTOMER_MODEL = 'customer';

@Schema({ timestamps: true, collection: CUSTOMER_MODEL })
export class Customer {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    phone: string;

    @Prop({ required: false })
    company_name: string;

    @Prop({ required: false })
    address: string;

    @Prop({ required: false })
    email: string;

    @Prop({ required: false })
    note: string;

    @Prop({ type: Types.ObjectId, ref: 'Agent', required: true })
    agent: Agent
}

export type CustomerDocument = Customer & Document;

export const CustomerSchema = SchemaFactory.createForClass(Customer);



