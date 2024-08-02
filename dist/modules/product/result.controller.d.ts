import { ResultService } from './result.service';
import { Result } from './schemas/product.schema';
export declare class ResultController {
    private readonly ResultService;
    constructor(ResultService: ResultService);
    findAll(query: Result): Promise<any>;
    create(param: Result): Promise<{
        message: string;
        paramInput: import("./schemas/product.schema").ResultDocument;
    }>;
    updateParam(id: string, updateParam: Result): Promise<Result>;
}
