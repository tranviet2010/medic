/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ClientAuth, UserAuth } from 'src/shares/decorators/http.decorators';
import { UserRole } from 'src/shares/enums/user.enum';
import { CustomerService } from './customer.service';
import { Customer } from './schemas/customer.schema';

@ApiTags('Customer')
@Controller('customer')
export class CustomerController {
    constructor(private readonly customerService: CustomerService) { }
    @Get()
    // @UserAuth()
    async findAll(@Query() query: string): Promise<any> {
        return this.customerService.findAll(query)
    }

    @Post()
    // @ClientAuth()
    // @UserAuth([UserRole.admin])
    async create(@Body() crud: Customer): Promise<void> {
        await this.customerService.create(crud);
    }

    @Put(':id')
    async updateParam(@Param('id') id: string, @Body() updateCustomer: Customer) {
        return this.customerService.updateCustomer(id, updateCustomer)
    }


}
