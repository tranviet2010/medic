/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ClientAuth, UserAuth } from 'src/shares/decorators/http.decorators';
import { UserRole } from 'src/shares/enums/user.enum';
import { ProductService } from './product.service';
import { Product } from './schemas/product.schema';

@ApiTags('Product')
@Controller('product')
export class ProductController {
    constructor(private readonly ProductService: ProductService) { }

    @Get()
    async findAll(@Query() query: Product): Promise<any> {
        return this.ProductService.findAll(query)
    }

    @Post()
    async create(@Body() param: Product) {
        const paramInput = await this.ProductService.createParam(param)
        return { message: 'Params created successfully', paramInput }
    }
    @Put(':id')
    async updateParam(@Param('id') id: string, @Body() updateParam: Product) {
        return this.ProductService.updateParam(id, updateParam)
    }

}
