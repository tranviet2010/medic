
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
        const {age,averageNose,averageFemur}=query
        const results = await this.NoseFemurModel.find({age,averageNose,averageFemur}).exec()
        if(results && results.length>0){
            return { message: 'Found records', data: results };
        }
        else{
            const resultAgeFemur = (await this.NoseFemurModel.find({age}))?.map(value=>value.limitNose)
            const resultAverageFemur = (await this.NoseFemurModel.find({age}))?.map(value=>value.averageNose)

            const resultAgeNose = (await this.NoseFemurModel.find({age}))?.map(value=>value.limitFemur)
            const resultAverageNose = (await this.NoseFemurModel.find({age}))?.map(value=>value.averageFemur)

            const [rangeStringFe] = resultAgeFemur
            const [startStringFe, endStringFe] = rangeStringFe.split('-')
            const sumFemur= Number(averageFemur) - Number(resultAverageFemur)
            const newStartFemur= Number(startStringFe) + sumFemur
            const newEndFemur = Number(endStringFe) + sumFemur

            const [rangeStringNo] = resultAgeNose
            const [startStringNo, endStringNo] = rangeStringNo.split('-')
            const sumNose= Number(averageNose) - Number(resultAverageNose)
            const newStartNose= Number(startStringNo) + sumNose
            const newEndNose = Number(endStringNo) + sumNose
            
            return [{newStartFemur,newEndFemur,sumFemur},{newStartNose,newEndNose,sumNose}]
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