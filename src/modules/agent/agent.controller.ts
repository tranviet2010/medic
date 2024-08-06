/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ClientAuth, UserAuth } from 'src/shares/decorators/http.decorators';
import { UserRole } from 'src/shares/enums/user.enum';
import { AgentService } from './agent.service';
import { Agent } from './schemas/agent.schema';
import { UserService } from '../user/user.service';

@ApiTags('Agent')
@Controller('agent')
export class AgentController {
    constructor(
        private readonly agentService: AgentService,
        private readonly usersService: UserService

    ) { }
    @Get()
    // @UserAuth()
    async findAll(@Query() query: string): Promise<any> {
        return this.agentService.findAll(query)
    }

    @Post()
    // @ClientAuth()
    // @UserAuth([UserRole.admin])
    async create(@Body() crud: Agent): Promise<void> {
        await this.agentService.create(crud);
        await this.usersService.createUser({...crud,role:[2]});

    }

    @Put(':id')
    async updateParam(@Param('id') id: string, @Body() updateNation: Agent) {
        return this.agentService.updateAgent(id, updateNation)
    }


}
