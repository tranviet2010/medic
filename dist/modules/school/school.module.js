"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchoolModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const school_controller_1 = require("./school.controller");
const school_schema_1 = require("./schemas/school.schema");
const school_service_1 = require("./school.service");
let SchoolModule = class SchoolModule {
};
SchoolModule = tslib_1.__decorate([
    common_1.Module({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: school_schema_1.School.name, schema: school_schema_1.SchoolSchema }])],
        controllers: [
            school_controller_1.SchoolController
        ],
        providers: [
            school_service_1.SchoolService
        ],
    })
], SchoolModule);
exports.SchoolModule = SchoolModule;
//# sourceMappingURL=school.module.js.map