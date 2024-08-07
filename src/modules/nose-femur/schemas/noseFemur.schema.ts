import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';


export const NOSE_FEMUR_MODEL = 'nose-femur';

@Schema({ timestamps: true, collection: NOSE_FEMUR_MODEL })
export class NoseFemur {
    @Prop({ required: Number })
    age: number;

    @Prop({type: String })
    averageFemur: string;

    @Prop({type: String })
    male: string;

    @Prop({ required: true })
    limitFemur: string;

    @Prop({type: String })
    averageNose: string;

    @Prop({ required: true })
    limitNose: string;
    
}

export type NoseFemurDocument = NoseFemur & Document;

export const NoseFemurSchema = SchemaFactory.createForClass(NoseFemur);



