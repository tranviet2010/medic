"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NationModule = void 0;
const tslib_1 = require("tslib");
const partner_controller_1 = require("./partner.controller");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const nation_schema_1 = require("./schemas/nation.schema");
const partner_service_1 = require("./partner.service");
let NationModule = class NationModule {
};
NationModule = tslib_1.__decorate([
    common_1.Module({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: nation_schema_1.Nation.name, schema: nation_schema_1.NationSchema }])],
        controllers: [
            partner_controller_1.NationController
        ],
        providers: [
            partner_service_1.NationService
        ],
    })
], NationModule);
exports.NationModule = NationModule;
//# sourceMappingURL=nation.module.js.map