"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CityModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const city_schema_1 = require("./schemas/city.schema");
const city_controller_1 = require("./city.controller");
const city_service_1 = require("./city.service");
let CityModule = class CityModule {
};
CityModule = tslib_1.__decorate([
    common_1.Module({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: city_schema_1.City.name, schema: city_schema_1.CitySchema }])],
        controllers: [
            city_controller_1.CityController
        ],
        providers: [
            city_service_1.CityService
        ],
    })
], CityModule);
exports.CityModule = CityModule;
//# sourceMappingURL=city.module.js.map