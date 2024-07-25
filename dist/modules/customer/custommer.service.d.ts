import { Model } from 'mongoose';
import { Agent, AgentDocument } from './schemas/customer.schema';
export declare class AgentService {
    private readonly agentModel;
    constructor(agentModel: Model<AgentDocument>);
    create(param: Agent): Promise<void>;
    findAll(query: any): Promise<any[]>;
    updateAgent(id: string, updateParam: Agent): Promise<Agent>;
}
