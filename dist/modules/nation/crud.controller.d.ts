import { NationService } from './crud.service';
import { Nation } from './schemas/nation.schema';
export declare class NationController {
    private readonly nationService;
    constructor(nationService: NationService);
    findAll(query: string): Promise<any>;
    create(crud: Nation): Promise<void>;
    updateParam(id: string, updateNation: Nation): Promise<any>;
}
