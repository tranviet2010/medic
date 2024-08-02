import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true, collection: 'files' })
@Schema()
export class File {
  @Prop({ required: false })
  customeId: string;

  @Prop({ required: true })
  filename: string;

  @Prop({ required: true })
  path: string;
}

export type FileDocument = File & Document;
export const FileSchema = SchemaFactory.createForClass(File);
