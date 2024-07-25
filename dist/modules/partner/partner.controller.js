"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartnerController = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const http_decorators_1 = require("../../shares/decorators/http.decorators");
const user_enum_1 = require("../../shares/enums/user.enum");
const partner_service_1 = require("./partner.service");
const partner_schema_1 = require("./schemas/partner.schema");
let PartnerController = class PartnerController {
    constructor(partnerService) {
        this.partnerService = partnerService;
    }
    async findAll(query) {
        return this.partnerService.findAll(query);
    }
    async create(crud) {
        await this.partnerService.create(crud);
    }
    async updateParam(id, updateNation) {
        return this.partnerService.updateNation(id, updateNation);
    }
};
tslib_1.__decorate([
    common_1.Get(),
    tslib_1.__param(0, common_1.Query()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], PartnerController.prototype, "findAll", null);
tslib_1.__decorate([
    common_1.Post(),
    tslib_1.__param(0, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [partner_schema_1.Partner]),
    tslib_1.__metadata("design:returntype", Promise)
], PartnerController.prototype, "create", null);
tslib_1.__decorate([
    common_1.Put(':id'),
    tslib_1.__param(0, common_1.Param('id')), tslib_1.__param(1, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, partner_schema_1.Partner]),
    tslib_1.__metadata("design:returntype", Promise)
], PartnerController.prototype, "updateParam", null);
PartnerController = tslib_1.__decorate([
    swagger_1.ApiTags('Partner'),
    common_1.Controller('partner'),
    tslib_1.__metadata("design:paramtypes", [partner_service_1.PartnerService])
], PartnerController);
exports.PartnerController = PartnerController;
//# sourceMappingURL=partner.controller.js.map