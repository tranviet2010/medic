"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NationModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const agent_schema_1 = require("./schemas/agent.schema");
const partner_service_1 = require("./partner.service");
const partner_controller_1 = require("./partner.controller");
let NationModule = class NationModule {
};
NationModule = tslib_1.__decorate([
    common_1.Module({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: agent_schema_1.Partner.name, schema: agent_schema_1.PartnerSchema }])],
        controllers: [
            partner_controller_1.PartnerController
        ],
        providers: [
            partner_service_1.PartnerService
        ],
    })
], NationModule);
exports.NationModule = NationModule;
//# sourceMappingURL=partner.module.js.map