import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FileSchema } from './schemas/file.schemas';
import { FilesController } from './file.controller';
import { FilesService } from './file.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: File.name, schema: FileSchema }])],
  controllers: [FilesController],
  providers: [FilesService],
})
export class FilesModule {}
