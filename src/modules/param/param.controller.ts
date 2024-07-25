/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ClientAuth, UserAuth } from 'src/shares/decorators/http.decorators';
import { UserRole } from 'src/shares/enums/user.enum';
import { Params } from './schemas/param.schema';
import { ParamService } from './param.service';

@ApiTags('params')
@Controller('params')
export class ParamsController {
    constructor(private readonly paramsService: ParamService) { }

    @Get()
    async findAll(@Query() query: string): Promise<any> {
        return this.paramsService.findAll(query)
    }

    @Post()
    async create(@Body() param: Params) {
        const paramInput = await this.paramsService.createParam(param)
        return { message: 'Params created successfully', paramInput }
    }
    @Put(':id')
    async updateParam(@Param('id') id: string, @Body() updateParam: Params) {
        return this.paramsService.updateParam(id, updateParam)
    }

}
