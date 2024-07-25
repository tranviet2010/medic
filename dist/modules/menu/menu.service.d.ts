import { MenuDocument, Menus } from './schemas/menu.schema';
import { Model } from 'mongoose';
export declare class MenuService {
    private readonly menuModel;
    constructor(menuModel: Model<MenuDocument>);
    create(param: Menus): Promise<any>;
    findAll(query: any): Promise<any[]>;
}
