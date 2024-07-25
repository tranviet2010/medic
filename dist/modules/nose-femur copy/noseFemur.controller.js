"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoseFemurController = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const http_decorators_1 = require("../../shares/decorators/http.decorators");
const user_enum_1 = require("../../shares/enums/user.enum");
const noseFemur_schema_1 = require("./schemas/noseFemur.schema");
const noseFemur_service_1 = require("./noseFemur.service");
let NoseFemurController = class NoseFemurController {
    constructor(NoseFemurService) {
        this.NoseFemurService = NoseFemurService;
    }
    async findAll(query) {
        return this.NoseFemurService.findAll(query);
    }
    async findAllQuery(query) {
        return this.NoseFemurService.findByQuery(query);
    }
    async create(param) {
        const paramInput = await this.NoseFemurService.createParam(param);
        return { message: 'Params created successfully', paramInput };
    }
    async updateParam(id, updateParam) {
        return this.NoseFemurService.updateParam(id, updateParam);
    }
};
tslib_1.__decorate([
    common_1.Get(),
    tslib_1.__param(0, common_1.Query()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [noseFemur_schema_1.NoseFemur]),
    tslib_1.__metadata("design:returntype", Promise)
], NoseFemurController.prototype, "findAll", null);
tslib_1.__decorate([
    common_1.Get('/finAll'),
    tslib_1.__param(0, common_1.Query()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [noseFemur_schema_1.NoseFemur]),
    tslib_1.__metadata("design:returntype", Promise)
], NoseFemurController.prototype, "findAllQuery", null);
tslib_1.__decorate([
    common_1.Post(),
    tslib_1.__param(0, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [noseFemur_schema_1.NoseFemur]),
    tslib_1.__metadata("design:returntype", Promise)
], NoseFemurController.prototype, "create", null);
tslib_1.__decorate([
    common_1.Put(':id'),
    tslib_1.__param(0, common_1.Param('id')), tslib_1.__param(1, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, noseFemur_schema_1.NoseFemur]),
    tslib_1.__metadata("design:returntype", Promise)
], NoseFemurController.prototype, "updateParam", null);
NoseFemurController = tslib_1.__decorate([
    swagger_1.ApiTags('nose-femur'),
    common_1.Controller('nose-femur'),
    tslib_1.__metadata("design:paramtypes", [noseFemur_service_1.NoseFemurService])
], NoseFemurController);
exports.NoseFemurController = NoseFemurController;
//# sourceMappingURL=noseFemur.controller.js.map