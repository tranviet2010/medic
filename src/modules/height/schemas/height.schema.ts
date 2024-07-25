import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty } from 'class-validator';
import { Document, Schema as MongooseSchema } from 'mongoose';


export const HEIGHT_MODEL = 'height';

@Schema({ timestamps: true, collection: HEIGHT_MODEL })
export class Height {
    // @Prop({required:false})
    // @Type(() => Date)
    // @IsDate()
    // dob: Date;

    @Prop({type: Number })
    age: number;

    @Prop({type: Number })
    month_age: number;

    @Prop({ required: Number })
    number_day: number;

    @Prop({type: String })
    up_height3: string;
    
    @Prop({type: String })
    up_height2: string;

    @Prop({type: String })
    up_height1: string;

    @Prop({type: String })
    height: string;

    @Prop({type: String })
    dow_height3: string;
    
    @Prop({type: String })
    dow_height2: string;

    @Prop({type: String })
    dow_height1: string;

    @Prop({type: String })
    up_weight3: string;

    @Prop({type: String })
    up_weight2: string;
    
    @Prop({type: String })
    up_weight1: string;

    @Prop({type: String })
    weight: string;

    @Prop({type: String })
    dow_weight3: string;

    @Prop({type: String })
    dow_weight2: string;
    
    @Prop({type: String })
    dow_weight1: string;
    
}

export type HeightDocument = Height & Document;

export const HeightSchema = SchemaFactory.createForClass(Height);



