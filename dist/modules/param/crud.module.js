"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrudModule = void 0;
const tslib_1 = require("tslib");
const param_schema_1 = require("./schemas/param.schema");
const param_service_1 = require("./param.service");
const crud_controller_1 = require("./crud.controller");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
let CrudModule = class CrudModule {
};
CrudModule = tslib_1.__decorate([
    common_1.Module({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: param_schema_1.Cruds.name, schema: param_schema_1.CrudSchema }])],
        controllers: [
            crud_controller_1.CrudController
        ],
        providers: [
            param_service_1.CrudService
        ],
    })
], CrudModule);
exports.CrudModule = CrudModule;
//# sourceMappingURL=crud.module.js.map