"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrudService = void 0;
const tslib_1 = require("tslib");
const crud_schema_1 = require("./schemas/crud.schema");
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
let CrudService = class CrudService {
    constructor(crudModel) {
        this.crudModel = crudModel;
    }
    async create(crud) {
        const createdCat = new this.crudModel(crud);
        createdCat.save();
    }
    async findAll(query) {
        let value = await this.crudModel.find(query).exec();
        return value;
    }
};
CrudService = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__param(0, mongoose_2.InjectModel(crud_schema_1.Cruds.name)),
    tslib_1.__metadata("design:paramtypes", [mongoose_1.Model])
], CrudService);
exports.CrudService = CrudService;
//# sourceMappingURL=crud.service.js.map