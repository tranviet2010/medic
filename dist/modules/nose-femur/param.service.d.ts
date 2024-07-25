import { Model } from 'mongoose';
import { ParamDocument, Params } from './schemas/noseFemur.schema';
export declare class ParamService {
    private readonly paramsModel;
    constructor(paramsModel: Model<ParamDocument>);
    createParam(params: Params): Promise<ParamDocument>;
    findAll(query: any): Promise<any[]>;
    updateParam(id: string, updateParam: Params): Promise<Params>;
}
