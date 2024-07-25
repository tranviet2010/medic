"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuSchema = exports.Menus = exports.MEMNU_MODEL = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
exports.MEMNU_MODEL = 'menu';
let Menus = class Menus {
};
tslib_1.__decorate([
    mongoose_1.Prop({
        required: false,
        type: mongoose_2.Schema.Types.ObjectId,
        index: true
    }),
    tslib_1.__metadata("design:type", String)
], Menus.prototype, "menu_id", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false, type: String }),
    tslib_1.__metadata("design:type", String)
], Menus.prototype, "name", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false, type: String }),
    tslib_1.__metadata("design:type", String)
], Menus.prototype, "code", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false, type: String }),
    tslib_1.__metadata("design:type", String)
], Menus.prototype, "url", void 0);
Menus = tslib_1.__decorate([
    mongoose_1.Schema({ timestamps: true, collection: exports.MEMNU_MODEL })
], Menus);
exports.Menus = Menus;
exports.MenuSchema = mongoose_1.SchemaFactory.createForClass(Menus);
//# sourceMappingURL=menu.schema.js.map