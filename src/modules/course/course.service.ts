
import { Model } from 'mongoose';
import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Course, CourseDocument } from './schemas/course.schema';


@Injectable()
export class CourseService {
    constructor(@InjectModel(Course.name) private readonly CourseModel: Model<CourseDocument>) { }

    async createParam(params: Course): Promise<CourseDocument> {
        return this.CourseModel.create(params)
    }
    async findAll(query: Course) {
        let value = await this.CourseModel.find(query).exec()
        return value

    }
    async updateParam(id: string, updateParam: Course): Promise<Course> {
        const param = await this.CourseModel.findByIdAndUpdate(id, updateParam, { new: true })
        if (!param) {
            throw new NotFoundException("user with id ${id} not found")
        }
        return param

    }

    async deleteCourse(id: string): Promise<void> {
        await this.CourseModel.findOneAndDelete({ id })
    }



}