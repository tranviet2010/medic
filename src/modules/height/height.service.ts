
import { Model } from 'mongoose';
import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Height, HeightDocument } from './schemas/height.schema';


@Injectable()
export class HeightService {
    constructor(@InjectModel(Height.name) private readonly HeightModel: Model<HeightDocument>) { }

    async createParam(params: Height): Promise<HeightDocument> {
        return this.HeightModel.create(params)
    }
    async findAll(query: Height) {
        let value = await this.HeightModel.find(query).exec()
        return value
        
    }

    async findByQuery(query: Height) {
        
        
    }

    async updateParam(id: string, updateParam: Height): Promise<Height> {
        const param =await this.HeightModel.findByIdAndUpdate(id,updateParam,{new:true})
        if (!param) {
            throw new NotFoundException("user with id ${id} not found")
        }
        return param

    }

}