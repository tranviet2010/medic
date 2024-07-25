"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParamsController = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const http_decorators_1 = require("../../shares/decorators/http.decorators");
const user_enum_1 = require("../../shares/enums/user.enum");
const noseFemur_schema_1 = require("./schemas/noseFemur.schema");
const param_service_1 = require("./param.service");
let ParamsController = class ParamsController {
    constructor(paramsService) {
        this.paramsService = paramsService;
    }
    async findAll(query) {
        return this.paramsService.findAll(query);
    }
    async create(param) {
        const paramInput = await this.paramsService.createParam(param);
        return { message: 'Params created successfully', paramInput };
    }
    async updateParam(id, updateParam) {
        return this.paramsService.updateParam(id, updateParam);
    }
};
tslib_1.__decorate([
    common_1.Get(),
    tslib_1.__param(0, common_1.Query()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], ParamsController.prototype, "findAll", null);
tslib_1.__decorate([
    common_1.Post(),
    tslib_1.__param(0, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof noseFemur_schema_1.Params !== "undefined" && noseFemur_schema_1.Params) === "function" ? _a : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ParamsController.prototype, "create", null);
tslib_1.__decorate([
    common_1.Put(':id'),
    tslib_1.__param(0, common_1.Param('id')), tslib_1.__param(1, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, typeof (_b = typeof noseFemur_schema_1.Params !== "undefined" && noseFemur_schema_1.Params) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ParamsController.prototype, "updateParam", null);
ParamsController = tslib_1.__decorate([
    swagger_1.ApiTags('params'),
    common_1.Controller('params'),
    tslib_1.__metadata("design:paramtypes", [param_service_1.ParamService])
], ParamsController);
exports.ParamsController = ParamsController;
//# sourceMappingURL=param.controller.js.map