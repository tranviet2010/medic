/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ClientAuth, UserAuth } from 'src/shares/decorators/http.decorators';
import { UserRole } from 'src/shares/enums/user.enum';
import { NoseFemur } from './schemas/noseFemur.schema';
import { NoseFemurService } from './noseFemur.service';

@ApiTags('nose-femur')
@Controller('nose-femur')
export class NoseFemurController {
    constructor(private readonly NoseFemurService: NoseFemurService) { }

    @Get()
    async findAll(@Query() query: NoseFemur): Promise<any> {
        return this.NoseFemurService.findAll(query)
    }

    @Get('/finByQuery')
    async findAllQuery(@Query() query: NoseFemur): Promise<any> {
        return this.NoseFemurService.findByQuery(query)
    }

    @Post()
    async create(@Body() param: NoseFemur) {
        const paramInput = await this.NoseFemurService.createParam(param)
        return { message: 'Params created successfully', paramInput }
    }
    @Put(':id')
    async updateParam(@Param('id') id: string, @Body() updateParam: NoseFemur) {
        return this.NoseFemurService.updateParam(id, updateParam)
    }

    @Delete('/:id')
    // @ApiBearerAuth()
    // @UserAuth([UserRole.admin])
    @ApiOperation({ summary: '[ ADMIN ] delete param' })
    async deleteParam(@Param() id: string): Promise<void> {
        await this.NoseFemurService.deleteNoseFemur(id)
    }

}
