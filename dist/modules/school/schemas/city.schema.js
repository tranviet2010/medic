"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CitySchema = exports.City = exports.CITY_MODEL = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = require("@nestjs/mongoose");
exports.CITY_MODEL = 'city';
let City = class City {
};
tslib_1.__decorate([
    mongoose_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", String)
], City.prototype, "name", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", String)
], City.prototype, "code", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", Number)
], City.prototype, "phan_he", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", String)
], City.prototype, "images", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", String)
], City.prototype, "code_nation", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", String)
], City.prototype, "state", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false }),
    tslib_1.__metadata("design:type", String)
], City.prototype, "note", void 0);
City = tslib_1.__decorate([
    mongoose_1.Schema({ timestamps: true, collection: exports.CITY_MODEL })
], City);
exports.City = City;
exports.CitySchema = mongoose_1.SchemaFactory.createForClass(City);
//# sourceMappingURL=city.schema.js.map