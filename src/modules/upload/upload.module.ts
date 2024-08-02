import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FilesController } from './upload.controller';
import { FilesService } from './upload.service';
import { UploadSchema } from './schemas/upload.schemas';

@Module({
  imports: [MongooseModule.forFeature([{ name: File.name, schema: UploadSchema }])],
  controllers: [FilesController],
  providers: [FilesService],
})
export class FilesModule {}
