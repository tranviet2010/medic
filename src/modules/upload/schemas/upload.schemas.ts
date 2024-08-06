import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true, collection: 'files' })
@Schema()
export class Upload {

  @Prop({ required: true })
  filename: string | any;

  @Prop({ required: true })
  path: string | any;
}

export type UploadDocument = Upload & Document;
export const UploadSchema = SchemaFactory.createForClass(Upload);
