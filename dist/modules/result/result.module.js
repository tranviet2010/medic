"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const result_controller_1 = require("./result.controller");
const result_schema_1 = require("./schemas/result.schema");
const result_service_1 = require("./result.service");
let ResultModule = class ResultModule {
};
ResultModule = tslib_1.__decorate([
    common_1.Module({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: result_schema_1.Result.name, schema: result_schema_1.ResultSchema }])],
        controllers: [
            result_controller_1.ResultController
        ],
        providers: [
            result_service_1.ResultService
        ],
    })
], ResultModule);
exports.ResultModule = ResultModule;
//# sourceMappingURL=result.module.js.map