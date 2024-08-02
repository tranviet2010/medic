"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeightDto = exports.UpHeight = void 0;
const tslib_1 = require("tslib");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class UpHeight {
}
tslib_1.__decorate([
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], UpHeight.prototype, "up_height3", void 0);
tslib_1.__decorate([
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], UpHeight.prototype, "up_height2", void 0);
tslib_1.__decorate([
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], UpHeight.prototype, "up_height1", void 0);
exports.UpHeight = UpHeight;
class HeightDto {
}
tslib_1.__decorate([
    class_validator_1.IsNumber(),
    tslib_1.__metadata("design:type", Number)
], HeightDto.prototype, "age", void 0);
tslib_1.__decorate([
    class_validator_1.IsNumber(),
    tslib_1.__metadata("design:type", Number)
], HeightDto.prototype, "month_age", void 0);
tslib_1.__decorate([
    class_validator_1.IsNumber(),
    tslib_1.__metadata("design:type", Number)
], HeightDto.prototype, "number_day", void 0);
tslib_1.__decorate([
    class_transformer_1.Type(() => UpHeight),
    tslib_1.__metadata("design:type", Array)
], HeightDto.prototype, "up_height", void 0);
exports.HeightDto = HeightDto;
//# sourceMappingURL=create.dto.js.map