"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeightModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const result_schema_1 = require("./schemas/result.schema");
const result_controller_1 = require("./result.controller");
const result_service_1 = require("./result.service");
let HeightModule = class HeightModule {
};
HeightModule = tslib_1.__decorate([
    common_1.Module({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: result_schema_1.Height.name, schema: result_schema_1.HeightSchema }])],
        controllers: [
            result_controller_1.HeightController
        ],
        providers: [
            result_service_1.HeightService
        ],
    })
], HeightModule);
exports.HeightModule = HeightModule;
//# sourceMappingURL=height.module.js.map