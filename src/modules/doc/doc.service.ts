
import { Model } from 'mongoose';
import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Doc, DocDocument } from './schemas/doc.schema';


@Injectable()
export class DocService {
    constructor(@InjectModel(Doc.name) private readonly DocModel: Model<DocDocument>) { }

    async createParam(params: Doc): Promise<DocDocument> {
        return this.DocModel.create(params)
    }
    async findAll(query: Doc) {
        let value = await this.DocModel.find(query).exec()
        return value

    }
    async updateParam(id: string, updateParam: Doc): Promise<Doc> {
        const param = await this.DocModel.findByIdAndUpdate(id, updateParam, { new: true })
        if (!param) {
            throw new NotFoundException("user with id ${id} not found")
        }
        return param

    }
    async deleteDoc(id: string): Promise<void> {
        await this.DocModel.findOneAndDelete({ id })
      }



}