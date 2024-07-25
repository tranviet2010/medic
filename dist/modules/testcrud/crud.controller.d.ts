import { CrudService } from './crud.service';
import { Cruds } from './schemas/crud.schema';
export declare class CrudController {
    private readonly crudsService;
    constructor(crudsService: CrudService);
    findAll(query: string): Promise<any>;
    create(crud: Cruds): Promise<void>;
}
