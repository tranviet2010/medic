"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeightController = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const http_decorators_1 = require("../../shares/decorators/http.decorators");
const user_enum_1 = require("../../shares/enums/user.enum");
const height_service_1 = require("./height.service");
const height_schema_1 = require("./schemas/height.schema");
let HeightController = class HeightController {
    constructor(HeightService) {
        this.HeightService = HeightService;
    }
    async findAll(query) {
        return this.HeightService.findAll(query);
    }
    async findAllQuery(query) {
        return this.HeightService.findByQuery(query);
    }
    async create(param) {
        const paramInput = await this.HeightService.createParam(param);
        return { message: 'Params created successfully', paramInput };
    }
    async updateParam(id, updateParam) {
        return this.HeightService.updateParam(id, updateParam);
    }
};
tslib_1.__decorate([
    common_1.Get(),
    tslib_1.__param(0, common_1.Query()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [height_schema_1.Height]),
    tslib_1.__metadata("design:returntype", Promise)
], HeightController.prototype, "findAll", null);
tslib_1.__decorate([
    common_1.Get('/finAll'),
    tslib_1.__param(0, common_1.Query()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [height_schema_1.Height]),
    tslib_1.__metadata("design:returntype", Promise)
], HeightController.prototype, "findAllQuery", null);
tslib_1.__decorate([
    common_1.Post(),
    tslib_1.__param(0, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [height_schema_1.Height]),
    tslib_1.__metadata("design:returntype", Promise)
], HeightController.prototype, "create", null);
tslib_1.__decorate([
    common_1.Put(':id'),
    tslib_1.__param(0, common_1.Param('id')), tslib_1.__param(1, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, height_schema_1.Height]),
    tslib_1.__metadata("design:returntype", Promise)
], HeightController.prototype, "updateParam", null);
HeightController = tslib_1.__decorate([
    swagger_1.ApiTags('Height'),
    common_1.Controller('height'),
    tslib_1.__metadata("design:paramtypes", [height_service_1.HeightService])
], HeightController);
exports.HeightController = HeightController;
//# sourceMappingURL=height.controller.js.map