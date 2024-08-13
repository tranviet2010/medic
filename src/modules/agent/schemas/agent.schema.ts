import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema, Types } from 'mongoose';
import { Partner } from '../../partner/schemas/partner.schema'


export const AGENT_MODEL = 'agent';

@Schema({ timestamps: true, collection: AGENT_MODEL })
export class Agent {
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

    @Prop({ required: true })
    password: string;

    @Prop({ required: false })
    note: string;

    @Prop({ type: Types.ObjectId, ref: 'Partner', required: true })
    partner: Partner;
}

export type AgentDocument = Agent & Document;

export const AgentSchema = SchemaFactory.createForClass(Agent);



