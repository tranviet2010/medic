import { AgentService } from './agent.service';
import { Agent } from './schemas/agent.schema';
import { UserService } from '../user/user.service';
export declare class AgentController {
    private readonly agentService;
    private readonly usersService;
    constructor(agentService: AgentService, usersService: UserService);
    findAll(query: string): Promise<any>;
    create(crud: Agent): Promise<void>;
    updateParam(id: string, updateNation: Agent): Promise<Agent>;
}
