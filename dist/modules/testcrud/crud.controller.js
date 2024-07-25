"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrudController = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const crud_service_1 = require("./crud.service");
const crud_schema_1 = require("./schemas/crud.schema");
const swagger_1 = require("@nestjs/swagger");
const http_decorators_1 = require("../../shares/decorators/http.decorators");
const user_enum_1 = require("../../shares/enums/user.enum");
let CrudController = class CrudController {
    constructor(crudsService) {
        this.crudsService = crudsService;
    }
    async findAll(query) {
        return this.crudsService.findAll(query);
    }
    async create(crud) {
        await this.crudsService.create(crud);
    }
};
tslib_1.__decorate([
    common_1.Get(),
    http_decorators_1.UserAuth(),
    tslib_1.__param(0, common_1.Query()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], CrudController.prototype, "findAll", null);
tslib_1.__decorate([
    common_1.Post(),
    http_decorators_1.ClientAuth(),
    http_decorators_1.UserAuth([user_enum_1.UserRole.admin]),
    tslib_1.__param(0, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [crud_schema_1.Cruds]),
    tslib_1.__metadata("design:returntype", Promise)
], CrudController.prototype, "create", null);
CrudController = tslib_1.__decorate([
    swagger_1.ApiTags('Crud'),
    common_1.Controller('crud'),
    tslib_1.__metadata("design:paramtypes", [crud_service_1.CrudService])
], CrudController);
exports.CrudController = CrudController;
//# sourceMappingURL=crud.controller.js.map