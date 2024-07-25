/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ClientAuth, UserAuth } from 'src/shares/decorators/http.decorators';
import { UserRole } from 'src/shares/enums/user.enum';
import { PartnerService } from './partner.service';
import { Partner } from './schemas/partner.schema';

@ApiTags('Partner')
@Controller('partner')
export class PartnerController {
    constructor(private readonly partnerService: PartnerService) { }
    @Get()
    // @UserAuth()
    async findAll(@Query() query: string): Promise<any> {
        return this.partnerService.findAll(query)
    }

    @Post()
    // @ClientAuth()
    // @UserAuth([UserRole.admin])
    async create(@Body() crud: Partner): Promise<void> {
        await this.partnerService.create(crud);
    }

    @Put(':id')
    async updateParam(@Param('id') id: string, @Body() updateNation: Partner) {
        return this.partnerService.updateNation(id, updateNation)
    }


}
