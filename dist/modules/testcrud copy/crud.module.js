"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrudModule = void 0;
const tslib_1 = require("tslib");
const crud_schema_1 = require("./schemas/crud.schema");
const crud_service_1 = require("./crud.service");
const crud_controller_1 = require("./crud.controller");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
let CrudModule = class CrudModule {
};
CrudModule = tslib_1.__decorate([
    common_1.Module({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: crud_schema_1.Cruds.name, schema: crud_schema_1.CrudSchema }])],
        controllers: [
            crud_controller_1.CrudController
        ],
        providers: [
            crud_service_1.CrudService
        ],
    })
], CrudModule);
exports.CrudModule = CrudModule;
//# sourceMappingURL=crud.module.js.map