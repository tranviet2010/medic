
import { Model } from 'mongoose';
import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Result, ResultDocument } from './schemas/result.schema';


@Injectable()
export class ResultService {
    constructor(@InjectModel(Result.name) private readonly ResultModel: Model<ResultDocument>) { }

    async createParam(params: Result): Promise<ResultDocument> {
        return this.ResultModel.create(params)
    }
    async findAll(query: Result) {
        let value = await this.ResultModel.find(query).exec()
        return value

    }
    async updateParam(id: string, updateParam: Result): Promise<Result> {
        const param = await this.ResultModel.findByIdAndUpdate(id, updateParam, { new: true })
        if (!param) {
            throw new NotFoundException("user with id ${id} not found")
        }
        return param

    }



}