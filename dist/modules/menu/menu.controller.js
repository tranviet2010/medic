"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuController = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const menu_service_1 = require("./menu.service");
let MenuController = class MenuController {
    constructor(menuService) {
        this.menuService = menuService;
    }
    async findAll(query) {
        return this.menuService.findAll(query);
    }
};
tslib_1.__decorate([
    common_1.Get(),
    tslib_1.__param(0, common_1.Query()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], MenuController.prototype, "findAll", null);
MenuController = tslib_1.__decorate([
    swagger_1.ApiTags('Menu'),
    common_1.Controller('menu'),
    tslib_1.__metadata("design:paramtypes", [menu_service_1.MenuService])
], MenuController);
exports.MenuController = MenuController;
//# sourceMappingURL=menu.controller.js.map