
import { Model } from 'mongoose';
import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from './schemas/product.schema';


@Injectable()
export class ProductService {
    constructor(@InjectModel(Product.name) private readonly ProductModel: Model<ProductDocument>) { }

    async createParam(params: Product): Promise<ProductDocument> {
        return this.ProductModel.create(params)
    }
    async findAll(query: Product) {
        let value = await this.ProductModel.find(query).exec()
        return value

    }
    async updateParam(id: string, updateParam: Product): Promise<Product> {
        const param = await this.ProductModel.findByIdAndUpdate(id, updateParam, { new: true })
        if (!param) {
            throw new NotFoundException("user with id ${id} not found")
        }
        return param

    }

    async deleteProduct(id: string): Promise<void> {
        await this.ProductModel.findOneAndDelete({ id })
    }



}