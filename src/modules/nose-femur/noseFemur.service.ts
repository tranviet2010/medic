
import { Model } from 'mongoose';
import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { NoseFemur, NoseFemurDocument } from './schemas/noseFemur.schema';


@Injectable()
export class NoseFemurService {
    constructor(@InjectModel(NoseFemur.name) private readonly NoseFemurModel: Model<NoseFemurDocument>) { }

    async createParam(params: NoseFemur): Promise<NoseFemurDocument> {
        return this.NoseFemurModel.create(params)
    }
    async findAll(query: NoseFemur) {
        let value = await this.NoseFemurModel.find(query).exec()
        return value
        
    }

    async findByQuery(query: NoseFemur) {
        const {age,averageNose}=query
        const results = await this.NoseFemurModel.find({age,averageNose}).exec()
        if(results && results.length>0){
            return { message: 'Found records', data: results };
        }
        else{
            const resultAge = (await this.NoseFemurModel.find({age}))?.map(value=>value.limitNose)
            const resultAverage = (await this.NoseFemurModel.find({age}))?.map(value=>value.averageNose)
            const [rangeString] = resultAge
            const [startString, endString] = rangeString.split('-')
            const sum= Number(averageNose) - Number(resultAverage)
            const newStart= Number(startString) + sum
            const newEnd = Number(endString) + sum
            
            return [newStart,newEnd]
        }
        
    }

    async updateParam(id: string, updateParam: NoseFemur): Promise<NoseFemur> {
        const param =await this.NoseFemurModel.findByIdAndUpdate(id,updateParam,{new:true})
        if (!param) {
            throw new NotFoundException("user with id ${id} not found")
        }
        return param

    }

}