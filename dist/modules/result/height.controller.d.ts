import { HeightService } from './height.service';
import { Height } from './schemas/result.schema';
export declare class HeightController {
    private readonly HeightService;
    constructor(HeightService: HeightService);
    findAll(query: Height): Promise<any>;
    findAllQuery(query: Height): Promise<any>;
    create(param: Height): Promise<{
        message: string;
        paramInput: import("./schemas/result.schema").HeightDocument;
    }>;
    updateParam(id: string, updateParam: Height): Promise<Height>;
}
