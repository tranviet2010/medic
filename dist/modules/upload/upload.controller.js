"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadController = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const upload_service_1 = require("./upload.service");
const http_decorators_1 = require("../../shares/decorators/http.decorators");
const user_enum_1 = require("../../shares/enums/user.enum");
let UploadController = class UploadController {
    constructor(uploadService) {
        this.uploadService = uploadService;
    }
    async uploadFile(file) {
        return this.uploadService.uploadLinode(file);
    }
};
tslib_1.__decorate([
    common_1.Post(),
    swagger_1.ApiOperation({ summary: 'Upload Image' }),
    swagger_1.ApiBearerAuth(),
    http_decorators_1.UserAuth([user_enum_1.UserRole.admin]),
    swagger_1.ApiConsumes('multipart/form-data'),
    swagger_1.ApiBody({
        schema: {
            type: 'object',
            properties: {
                file: {
                    type: 'string',
                    format: 'binary',
                },
            },
        },
    }),
    common_1.UseInterceptors(platform_express_1.FileInterceptor('file')),
    tslib_1.__param(0, common_1.UploadedFile()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UploadController.prototype, "uploadFile", null);
UploadController = tslib_1.__decorate([
    swagger_1.ApiTags('Upload'),
    common_1.Controller('upload'),
    tslib_1.__metadata("design:paramtypes", [upload_service_1.UploadService])
], UploadController);
exports.UploadController = UploadController;
//# sourceMappingURL=upload.controller.js.map