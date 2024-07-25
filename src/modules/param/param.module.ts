import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ParamSchema, Params } from './schemas/param.schema';
import { ParamsController } from './param.controller';
import { ParamService } from './param.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: Params.name, schema: ParamSchema }])],
    controllers: [
        ParamsController],
    providers: [
        ParamService],
})
export class ParamModule { }
