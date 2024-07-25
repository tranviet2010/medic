"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuModule = void 0;
const tslib_1 = require("tslib");
const menu_service_1 = require("./menu.service");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const menu_schema_1 = require("./schemas/menu.schema");
const menu_controller_1 = require("./menu.controller");
let MenuModule = class MenuModule {
};
MenuModule = tslib_1.__decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: menu_schema_1.Menus.name, schema: menu_schema_1.MenuSchema }]),
        ],
        controllers: [menu_controller_1.MenuController],
        providers: [
            menu_service_1.MenuService,
        ],
    })
], MenuModule);
exports.MenuModule = MenuModule;
//# sourceMappingURL=menu.module.js.map