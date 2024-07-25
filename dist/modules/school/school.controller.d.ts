import { SchoolService } from './school.service';
import { School } from './schemas/school.schema';
export declare class SchoolController {
    private readonly schoolService;
    constructor(schoolService: SchoolService);
    findAll(query: string): Promise<any>;
    create(crud: School): Promise<void>;
    updateParam(id: string, updateNation: School): Promise<School>;
}
