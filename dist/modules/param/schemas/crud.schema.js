"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrudSchema = exports.Cruds = exports.CRUD_MODEL = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
exports.CRUD_MODEL = 'crud';
let Cruds = class Cruds {
};
tslib_1.__decorate([
    mongoose_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", String)
], Cruds.prototype, "name", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: true, type: mongoose_2.Schema.Types.Decimal128 }),
    tslib_1.__metadata("design:type", String)
], Cruds.prototype, "quantity", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", String)
], Cruds.prototype, "code", void 0);
Cruds = tslib_1.__decorate([
    mongoose_1.Schema({ timestamps: true, collection: exports.CRUD_MODEL })
], Cruds);
exports.Cruds = Cruds;
exports.CrudSchema = mongoose_1.SchemaFactory.createForClass(Cruds);
//# sourceMappingURL=crud.schema.js.map