
import { Model } from 'mongoose';
import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ParamDocument, Params } from './schemas/param.schema';


@Injectable()
export class ParamService {
    constructor(@InjectModel(Params.name) private readonly paramsModel: Model<ParamDocument>) { }

    async createParam(params: Params): Promise<ParamDocument> {
        return this.paramsModel.create(params)
    }
    async findAll(query: any) {
        let value = await this.paramsModel.find(query).exec()
        return value
    }

    async updateParam(id: string, updateParam: Params): Promise<Params> {
        const param =await this.paramsModel.findByIdAndUpdate(id,updateParam,{new:true})
        if (!param) {
            throw new NotFoundException("user with id ${id} not found")
        }
        return param

    }

}