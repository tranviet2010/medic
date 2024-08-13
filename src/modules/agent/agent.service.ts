import { Model } from 'mongoose';
import { Injectable, Inject, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Agent, AgentDocument } from './schemas/agent.schema';
import { httpErrors } from 'src/shares/exceptions';


@Injectable()
export class AgentService {
    constructor(@InjectModel(Agent.name) private readonly agentModel: Model<AgentDocument>) { }

    async create(param: Agent): Promise<void> {
        const {phone} = param
        let agent = await this.agentModel.findOne({phone:param.phone})
        console.log("agent",agent);
        if(agent){
            throw new BadRequestException(httpErrors.ACCOUNT_EXISTED);
        }
        const createdCat = new this.agentModel(param);
        createdCat.save();
    }
    async findAll(query:any) {
        let value = await this.agentModel.find(query).exec()
        return value
    }

    async updateAgent(id: string, updateParam: Agent): Promise<Agent> {
        const nation =await this.agentModel.findByIdAndUpdate(id,updateParam,{new:true})
        if (!nation) {
            throw new NotFoundException("user with id ${id} not found")
        }
        return nation

    }

    async deleteAgent(id: string): Promise<void> {
        await this.agentModel.findOneAndDelete({ id })
    }
}