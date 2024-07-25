import { CrudService } from './param.service';
import { Cruds } from './schemas/param.schema';
export declare class CrudController {
    private readonly crudsService;
    constructor(crudsService: CrudService);
    findAll(query: string): Promise<any>;
    create(crud: Cruds): Promise<void>;
}
