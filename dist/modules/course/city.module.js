"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CityModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const course_schema_1 = require("./schemas/course.schema");
const course_controller_1 = require("./course.controller");
const course_service_1 = require("./course.service");
let CityModule = class CityModule {
};
CityModule = tslib_1.__decorate([
    common_1.Module({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: course_schema_1.City.name, schema: course_schema_1.CitySchema }])],
        controllers: [
            course_controller_1.CityController
        ],
        providers: [
            course_service_1.CityService
        ],
    })
], CityModule);
exports.CityModule = CityModule;
//# sourceMappingURL=city.module.js.map