"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CityService = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const city_schema_1 = require("./schemas/city.schema");
let CityService = class CityService {
    constructor(cityModel) {
        this.cityModel = cityModel;
    }
    async create(param) {
        const createdCat = new this.cityModel(param);
        createdCat.save();
    }
    async findAll(query) {
        let value = await this.cityModel.find(query).exec();
        return value;
    }
    async updateCity(id, updateParam) {
        const city = await this.cityModel.findByIdAndUpdate(id, updateParam, { new: true });
        if (!city) {
            throw new common_1.NotFoundException("user with id ${id} not found");
        }
        return city;
    }
};
CityService = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__param(0, mongoose_2.InjectModel(city_schema_1.City.name)),
    tslib_1.__metadata("design:paramtypes", [mongoose_1.Model])
], CityService);
exports.CityService = CityService;
//# sourceMappingURL=city.service.js.map