

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Agent, AgentSchema } from './schemas/agent.schema';
import { AgentController } from './agent.controller';
import { AgentService } from './agent.service';
import { UsersModule } from '../user/user.module';

@Module({
    imports: [MongooseModule.forFeature([{ name: Agent.name, schema: AgentSchema }]),UsersModule],
    controllers: [
        AgentController],
    providers: [
        AgentService],
})
export class AgentModule { }
