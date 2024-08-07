/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ClientAuth, UserAuth } from 'src/shares/decorators/http.decorators';
import { UserRole } from 'src/shares/enums/user.enum';
import { DocService } from './doc.service';
import { Doc } from './schemas/doc.schema';

@ApiTags('Doc')
@Controller('doc')
export class DocController {
    constructor(private readonly DocService: DocService) { }

    @Get()
    async findAll(@Query() query: Doc): Promise<any> {
        return this.DocService.findAll(query)
    }

    @Post()
    async create(@Body() param: Doc) {
        const paramInput = await this.DocService.createParam(param)
        return { message: 'Params created successfully', paramInput }
    }
    @Put(':id')
    async updateParam(@Param('id') id: string, @Body() updateParam: Doc) {
        return this.DocService.updateParam(id, updateParam)
    }

    @Delete('/:id')
    // @ApiBearerAuth()
    // @UserAuth([UserRole.admin])
    @ApiOperation({ summary: '[ ADMIN ] delete param' })
    async deleteDoc(@Param() id: string): Promise<void> {
        await this.DocService.deleteDoc(id)
    }

}
