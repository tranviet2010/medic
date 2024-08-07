import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DocController } from './doc.controller';
import { Doc, DocSchema } from './schemas/doc.schema';
import { DocService } from './doc.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: Doc.name, schema: DocSchema }])],
    controllers: [
        DocController],
    providers: [
        DocService],
})
export class DocModule { }
