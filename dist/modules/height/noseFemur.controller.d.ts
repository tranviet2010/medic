import { NoseFemur } from './schemas/height.schema';
import { NoseFemurService } from './noseFemur.service';
export declare class NoseFemurController {
    private readonly NoseFemurService;
    constructor(NoseFemurService: NoseFemurService);
    findAll(query: NoseFemur): Promise<any>;
    findAllQuery(query: NoseFemur): Promise<any>;
    create(param: NoseFemur): Promise<{
        message: string;
        paramInput: import("./schemas/height.schema").NoseFemurDocument;
    }>;
    updateParam(id: string, updateParam: NoseFemur): Promise<NoseFemur>;
}
