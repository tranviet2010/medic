"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParamModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const noseFemur_schema_1 = require("./schemas/noseFemur.schema");
const param_controller_1 = require("./param.controller");
const param_service_1 = require("./param.service");
let ParamModule = class ParamModule {
};
ParamModule = tslib_1.__decorate([
    common_1.Module({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: noseFemur_schema_1.Params.name, schema: noseFemur_schema_1.ParamSchema }])],
        controllers: [
            param_controller_1.ParamsController
        ],
        providers: [
            param_service_1.ParamService
        ],
    })
], ParamModule);
exports.ParamModule = ParamModule;
//# sourceMappingURL=param.module.js.map