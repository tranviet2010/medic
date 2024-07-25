import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NoseFemur, NoseFemurSchema } from './schemas/noseFemur.schema';
import { NoseFemurController } from './noseFemur.controller';
import { NoseFemurService } from './noseFemur.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: NoseFemur.name, schema: NoseFemurSchema }])],
    controllers: [
        NoseFemurController],
    providers: [
        NoseFemurService],
})
export class NoseFemurModule { }
