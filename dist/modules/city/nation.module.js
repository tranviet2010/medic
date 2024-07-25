"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NationModule = void 0;
const tslib_1 = require("tslib");
const nation_controller_1 = require("./nation.controller");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const city_schema_1 = require("./schemas/city.schema");
const nation_service_1 = require("./nation.service");
let NationModule = class NationModule {
};
NationModule = tslib_1.__decorate([
    common_1.Module({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: city_schema_1.Nation.name, schema: city_schema_1.NationSchema }])],
        controllers: [
            nation_controller_1.NationController
        ],
        providers: [
            nation_service_1.NationService
        ],
    })
], NationModule);
exports.NationModule = NationModule;
//# sourceMappingURL=nation.module.js.map