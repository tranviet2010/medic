import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Height, HeightSchema } from './schemas/height.schema';
import { HeightController } from './height.controller';
import { HeightService } from './height.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: Height.name, schema: HeightSchema }])],
    controllers: [
        HeightController],
    providers: [
        HeightService],
})
export class HeightModule { }
