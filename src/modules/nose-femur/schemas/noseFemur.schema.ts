import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';


export const NOSE_FEMUR_MODEL = 'nose-femur';

@Schema({ timestamps: true, collection: NOSE_FEMUR_MODEL })
export class NoseFemur {
    @Prop({ required: Number })
    age: number;

    @Prop({type: String })
    average: string;

    @Prop({ required: true })
    limit: string;
    
}

export type NoseFemurDocument = NoseFemur & Document;

export const NoseFemurSchema = SchemaFactory.createForClass(NoseFemur);



