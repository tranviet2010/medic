/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ClientAuth, UserAuth } from 'src/shares/decorators/http.decorators';
import { UserRole } from 'src/shares/enums/user.enum';
import { HeightService } from './height.service';
import { Height } from './schemas/height.schema';

@ApiTags('Height')
@Controller('height')
export class HeightController {
    constructor(private readonly HeightService: HeightService) { }

    @Get()
    async findAll(@Query() query: Height): Promise<any> {
        return this.HeightService.findAll(query)
    }

    @Get('/finByQuery')
    async findAllQuery(@Query() query: Height): Promise<any> {
        return this.HeightService.findByQuery(query)
    }

    @Post()
    async create(@Body() param: Height) {
        const paramInput = await this.HeightService.createParam(param)
        return { message: 'Params created successfully', paramInput }
    }
    @Put(':id')
    async updateParam(@Param('id') id: string, @Body() updateParam: Height) {
        return this.HeightService.updateParam(id, updateParam)
    }

}
