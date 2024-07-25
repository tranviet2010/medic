"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoseFemurModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const height_schema_1 = require("./schemas/height.schema");
const height_controller_1 = require("./height.controller");
const height_service_1 = require("./height.service");
let NoseFemurModule = class NoseFemurModule {
};
NoseFemurModule = tslib_1.__decorate([
    common_1.Module({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: height_schema_1.NoseFemur.name, schema: height_schema_1.NoseFemurSchema }])],
        controllers: [
            height_controller_1.NoseFemurController
        ],
        providers: [
            height_service_1.NoseFemurService
        ],
    })
], NoseFemurModule);
exports.NoseFemurModule = NoseFemurModule;
//# sourceMappingURL=param.module.js.map