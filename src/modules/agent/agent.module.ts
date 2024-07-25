

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Agent, AgentSchema } from './schemas/agent.schema';
import { AgentController } from './agent.controller';
import { AgentService } from './agent.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: Agent.name, schema: AgentSchema }])],
    controllers: [
        AgentController],
    providers: [
        AgentService],
})
export class AgentModule { }
