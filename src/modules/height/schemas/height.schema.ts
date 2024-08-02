import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsObject, IsString } from 'class-validator';
import { Document, Schema as MongooseSchema } from 'mongoose';

// Khai báo các schema con
@Schema({ _id: false })
class UpHeight {
    @Prop({ type: String })
    @IsString()
    up_height3: string;

    @Prop({ type: String })
    @IsString()
    up_height2: string;

    @Prop({ type: String })
    @IsString()
    up_height1: string;
}

@Schema({ _id: false })
class DowHeight {
    @Prop({ type: String })
    @IsString()
    dow_height3: string;

    @Prop({ type: String })
    @IsString()
    dow_height2: string;

    @Prop({ type: String })
    @IsString()
    dow_height1: string;
}

@Schema({ _id: false })
class UpWeight {
    @Prop({ type: String })
    @IsString()
    up_weight3: string;

    @Prop({ type: String })
    @IsString()
    up_weight2: string;

    @Prop({ type: String })
    @IsString()
    up_weight1: string;
}

@Schema({ _id: false })
class DowWeight {
    @Prop({ type: String })
    @IsString()
    dow_weight3: string;

    @Prop({ type: String })
    @IsString()
    dow_weight2: string;

    @Prop({ type: String })
    @IsString()
    dow_weight1: string;
}

// Khai báo schema chính
@Schema({ timestamps: true, collection: 'height' })
export class Height {
    @Prop({ type: Number })
    age: number;

    @Prop({ type: Number })
    month_age: number;

    @Prop({ required: true, type: Number })
    number_day: number;

    @Prop({ type: UpHeight, required: false })
    @Type(() => UpHeight)
    up_height: UpHeight;

    @Prop({ type: String })
    height: string;

    @Prop({ type: DowHeight, required: false })
    @Type(() => DowHeight)
    dow_height: DowHeight;

    @Prop({ type: UpWeight, required: false })
    @Type(() => UpWeight)
    up_weight: UpWeight;

    @Prop({ type: String })
    weight: string;

    @Prop({ type: DowWeight, required: false })
    @Type(() => DowWeight)
    dow_weight: DowWeight;
}

export type HeightDocument = Height & Document;

export const HeightSchema = SchemaFactory.createForClass(Height);

// Khai báo các schema con
export const UpHeightSchema = SchemaFactory.createForClass(UpHeight);
export const DowHeightSchema = SchemaFactory.createForClass(DowHeight);
export const UpWeightSchema = SchemaFactory.createForClass(UpWeight);
export const DowWeightSchema = SchemaFactory.createForClass(DowWeight);
