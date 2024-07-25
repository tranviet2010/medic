import { Params } from './schemas/param.schema';
import { ParamService } from './param.service';
export declare class ParamsController {
    private readonly paramsService;
    constructor(paramsService: ParamService);
    findAll(query: string): Promise<any>;
    create(param: Params): Promise<{
        message: string;
        paramInput: import("./schemas/param.schema").ParamDocument;
    }>;
    updateParam(id: string, updateParam: Params): Promise<Params>;
}
