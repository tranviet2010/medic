import { MenuService } from "./menu.service";
export declare class MenuController {
    private readonly menuService;
    constructor(menuService: MenuService);
    findAll(query: string): Promise<any>;
}
