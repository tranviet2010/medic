import { Params } from './schemas/noseFemur.schema';
import { ParamService } from './param.service';
export declare class ParamsController {
    private readonly paramsService;
    constructor(paramsService: ParamService);
    findAll(query: string): Promise<any>;
    create(param: Params): Promise<{
        message: string;
        paramInput: import("./schemas/noseFemur.schema").ParamDocument;
    }>;
    updateParam(id: string, updateParam: Params): Promise<Params>;
}
