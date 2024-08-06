import { Model } from 'mongoose';
import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Partner, PartnerDocument } from './schemas/partner.schema';
import { User, UserDocument } from '../user/schemas/user.schema';


@Injectable()
export class PartnerService {
    constructor(
        @InjectModel(Partner.name) private readonly partnerModel: Model<PartnerDocument>) { }

    async create(param: Partner): Promise<void> {
        const createdCat = new this.partnerModel(param);
        // const newUser =  new this.userModel({...param,role:[1]})

        createdCat.save();
        // newUser.save();
    }
    async findAll(query:any) {
        let value = await this.partnerModel.find(query).exec()
        return value
    }

    async updateNation(id: string, updateParam: Partner): Promise<Partner> {
        const nation =await this.partnerModel.findByIdAndUpdate(id,updateParam,{new:true})
        if (!nation) {
            throw new NotFoundException("user with id ${id} not found")
        }
        return nation

    }
    async deletePartner(id: string): Promise<void> {
        await this.partnerModel.findOneAndDelete({ id })
      }
}