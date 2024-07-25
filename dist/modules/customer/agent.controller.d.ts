import { AgentService } from './agent.service';
import { Agent } from './schemas/customer.schema';
export declare class AgentController {
    private readonly agentService;
    constructor(agentService: AgentService);
    findAll(query: string): Promise<any>;
    create(crud: Agent): Promise<void>;
    updateParam(id: string, updateNation: Agent): Promise<Agent>;
}
