import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ResultController } from './result.controller';
import { Result, ResultSchema } from './schemas/result.schema';
import { ResultService } from './result.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: Result.name, schema: ResultSchema }])],
    controllers: [
        ResultController],
    providers: [
        ResultService],
})
export class ResultModule { }
