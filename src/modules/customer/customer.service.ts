import { Model } from 'mongoose';
import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Customer, CustomerDocument } from './schemas/customer.schema';


@Injectable()
export class CustomerService {
    constructor(@InjectModel(Customer.name) private readonly customerModel: Model<CustomerDocument>) { }

    async create(param: Customer): Promise<void> {
        const createdCat = new this.customerModel(param);
        createdCat.save();
    }
    async findAll(query:any) {
        let value = await this.customerModel.find(query).exec()
        return value
    }

    async updateCustomer(id: string, updateParam: Customer): Promise<Customer> {
        const nation =await this.customerModel.findByIdAndUpdate(id,updateParam,{new:true})
        if (!nation) {
            throw new NotFoundException("user with id ${id} not found")
        }
        return nation
    }

    async deleteCustomer(id: string): Promise<void> {
        await this.customerModel.findOneAndDelete({ id })
    }
}