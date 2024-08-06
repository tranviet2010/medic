"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoseFemurModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const noseFemur_schema_1 = require("./schemas/noseFemur.schema");
const noseFemur_controller_1 = require("./noseFemur.controller");
const noseFemur_service_1 = require("./noseFemur.service");
let NoseFemurModule = class NoseFemurModule {
};
NoseFemurModule = tslib_1.__decorate([
    common_1.Module({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: noseFemur_schema_1.NoseFemur.name, schema: noseFemur_schema_1.NoseFemurSchema }])],
        controllers: [
            noseFemur_controller_1.NoseFemurController
        ],
        providers: [
            noseFemur_service_1.NoseFemurService
        ],
    })
], NoseFemurModule);
exports.NoseFemurModule = NoseFemurModule;
//# sourceMappingURL=param.module.js.map