"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NationController = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const crud_service_1 = require("./crud.service");
const swagger_1 = require("@nestjs/swagger");
const http_decorators_1 = require("../../shares/decorators/http.decorators");
const user_enum_1 = require("../../shares/enums/user.enum");
const nation_schema_1 = require("./schemas/nation.schema");
let NationController = class NationController {
    constructor(nationService) {
        this.nationService = nationService;
    }
    async findAll(query) {
        return this.nationService.findAll(query);
    }
    async create(crud) {
        await this.nationService.create(crud);
    }
    async updateParam(id, updateNation) {
        return this.nationService.updateNation(id, updateNation);
    }
};
tslib_1.__decorate([
    common_1.Get(),
    tslib_1.__param(0, common_1.Query()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], NationController.prototype, "findAll", null);
tslib_1.__decorate([
    common_1.Post(),
    tslib_1.__param(0, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [nation_schema_1.Nation]),
    tslib_1.__metadata("design:returntype", Promise)
], NationController.prototype, "create", null);
tslib_1.__decorate([
    common_1.Put(':id'),
    tslib_1.__param(0, common_1.Param('id')), tslib_1.__param(1, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, nation_schema_1.Nation]),
    tslib_1.__metadata("design:returntype", Promise)
], NationController.prototype, "updateParam", null);
NationController = tslib_1.__decorate([
    swagger_1.ApiTags('Nation'),
    common_1.Controller('nation'),
    tslib_1.__metadata("design:paramtypes", [crud_service_1.NationService])
], NationController);
exports.NationController = NationController;
//# sourceMappingURL=crud.controller.js.map