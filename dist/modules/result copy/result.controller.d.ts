import { ResultService } from './result.service';
import { Result } from './schemas/result.schema';
export declare class ResultController {
    private readonly ResultService;
    constructor(ResultService: ResultService);
    findAll(query: Result): Promise<any>;
    create(param: Result): Promise<{
        message: string;
        paramInput: import("./schemas/result.schema").ResultDocument;
    }>;
    updateParam(id: string, updateParam: Result): Promise<Result>;
}
