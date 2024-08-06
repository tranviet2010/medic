import { PartnerService } from './partner.service';
import { Partner } from './schemas/partner.schema';
import { UserService } from '../user/user.service';
export declare class PartnerController {
    private readonly partnerService;
    private readonly usersService;
    constructor(partnerService: PartnerService, usersService: UserService);
    findAll(query: string): Promise<any>;
    create(crud: Partner): Promise<void>;
    updateParam(id: string, updateNation: Partner): Promise<Partner>;
    deleteParam(id: string): Promise<void>;
}
