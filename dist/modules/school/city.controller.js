"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CityController = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const http_decorators_1 = require("../../shares/decorators/http.decorators");
const user_enum_1 = require("../../shares/enums/user.enum");
const school_schema_1 = require("./schemas/school.schema");
const city_service_1 = require("./city.service");
let CityController = class CityController {
    constructor(cityService) {
        this.cityService = cityService;
    }
    async findAll(query) {
        return this.cityService.findAll(query);
    }
    async create(crud) {
        await this.cityService.create(crud);
    }
    async updateParam(id, updateNation) {
        return this.cityService.updateCity(id, updateNation);
    }
};
tslib_1.__decorate([
    common_1.Get(),
    tslib_1.__param(0, common_1.Query()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], CityController.prototype, "findAll", null);
tslib_1.__decorate([
    common_1.Post(),
    tslib_1.__param(0, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof school_schema_1.City !== "undefined" && school_schema_1.City) === "function" ? _a : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CityController.prototype, "create", null);
tslib_1.__decorate([
    common_1.Put(':id'),
    tslib_1.__param(0, common_1.Param('id')), tslib_1.__param(1, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, typeof (_b = typeof school_schema_1.City !== "undefined" && school_schema_1.City) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CityController.prototype, "updateParam", null);
CityController = tslib_1.__decorate([
    swagger_1.ApiTags('City'),
    common_1.Controller('city'),
    tslib_1.__metadata("design:paramtypes", [city_service_1.CityService])
], CityController);
exports.CityController = CityController;
//# sourceMappingURL=city.controller.js.map