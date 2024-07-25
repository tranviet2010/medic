"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const menu_schema_1 = require("./schemas/menu.schema");
const mongoose_2 = require("mongoose");
let MenuService = class MenuService {
    constructor(menuModel) {
        this.menuModel = menuModel;
    }
    async create(param) {
        const createdCat = new this.menuModel(param);
        createdCat.save();
    }
    async findAll(query) {
        let value = await this.menuModel.aggregate([
            {
                $lookup: {
                    from: 'param',
                    localField: 'code',
                    foreignField: 'code',
                    as: 'children'
                }
            }
        ]).exec();
        return value;
    }
};
MenuService = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__param(0, mongoose_1.InjectModel(menu_schema_1.Menus.name)),
    tslib_1.__metadata("design:paramtypes", [mongoose_2.Model])
], MenuService);
exports.MenuService = MenuService;
//# sourceMappingURL=menu.service.js.map