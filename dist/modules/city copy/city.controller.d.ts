import { City } from './schemas/city.schema';
import { CityService } from './city.service';
export declare class CityController {
    private readonly cityService;
    constructor(cityService: CityService);
    findAll(query: string): Promise<any>;
    create(crud: City): Promise<void>;
    updateParam(id: string, updateNation: City): Promise<City>;
}
