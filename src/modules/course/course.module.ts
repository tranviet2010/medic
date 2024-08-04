import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CourseService } from './course.service';
import { Course, CourseSchema } from './schemas/course.schema';
import { CourseController } from './course.controller';

@Module({
    imports: [MongooseModule.forFeature([{ name: Course.name, schema: CourseSchema }])],
    controllers: [
        CourseController],
    providers: [
        CourseService],
})
export class CourseModule { }
