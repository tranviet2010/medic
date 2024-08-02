/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ClientAuth, UserAuth } from 'src/shares/decorators/http.decorators';
import { UserRole } from 'src/shares/enums/user.enum';
import { ResultService } from './result.service';
import { Result } from './schemas/result.schema';

@ApiTags('Result')
@Controller('result')
export class ResultController {
    constructor(private readonly ResultService: ResultService) { }

    @Get()
    async findAll(@Query() query: Result): Promise<any> {
        return this.ResultService.findAll(query)
    }

    @Post()
    async create(@Body() param: Result) {
        const paramInput = await this.ResultService.createParam(param)
        return { message: 'Params created successfully', paramInput }
    }
    @Put(':id')
    async updateParam(@Param('id') id: string, @Body() updateParam: Result) {
        return this.ResultService.updateParam(id, updateParam)
    }

}
