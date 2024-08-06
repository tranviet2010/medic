/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ClientAuth, UserAuth } from 'src/shares/decorators/http.decorators';
import { UserRole } from 'src/shares/enums/user.enum';
import { PartnerService } from './partner.service';
import { Partner } from './schemas/partner.schema';
import { UserService } from '../user/user.service';

@ApiTags('Partner')
@Controller('partner')
export class PartnerController {
    constructor(
        private readonly partnerService: PartnerService,
        private readonly usersService: UserService
    ) { }

    @Get()
    // @UserAuth()
    async findAll(@Query() query: string): Promise<any> {
        return this.partnerService.findAll(query)
    }

    @Post()
    // @ClientAuth()
    // @UserAuth([UserRole.admin])
    async create(@Body() crud: Partner): Promise<void> {
        await this.partnerService.create(crud)
        await this.usersService.createUser({...crud,role:[1]})
    }

    @Put(':id')
    async updateParam(@Param('id') id: string, @Body() updateNation: Partner) {
        return this.partnerService.updateNation(id, updateNation)
    }

    @Delete('/:id')
    // @ApiBearerAuth()
    // @UserAuth([UserRole.admin])
    @ApiOperation({ summary: '[ ADMIN ] delete param' })
    async deleteParam(@Param() id: string): Promise<void> {
        await this.partnerService.deletePartner(id)
    }


}
