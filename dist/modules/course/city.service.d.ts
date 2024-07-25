import { Model } from 'mongoose';
import { City, CityDocument } from './schemas/course.schema';
export declare class CityService {
    private readonly cityModel;
    constructor(cityModel: Model<CityDocument>);
    create(param: City): Promise<void>;
    findAll(query: any): Promise<any[]>;
    updateCity(id: string, updateParam: City): Promise<City>;
}
