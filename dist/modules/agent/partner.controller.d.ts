import { PartnerService } from './partner.service';
import { Partner } from './schemas/agent.schema';
export declare class PartnerController {
    private readonly partnerService;
    constructor(partnerService: PartnerService);
    findAll(query: string): Promise<any>;
    create(crud: Partner): Promise<void>;
    updateParam(id: string, updateNation: Partner): Promise<Partner>;
}
