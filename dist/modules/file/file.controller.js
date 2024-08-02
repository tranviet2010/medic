"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilesController = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const file_service_1 = require("./file.service");
let FilesController = class FilesController {
    constructor(filesService) {
        this.filesService = filesService;
    }
    async uploadFile(file) {
        return this.filesService.saveFile(file);
    }
    async getFile(customeId) {
        const file = await this.filesService.getFileByCustomeId(customeId);
        return file ? { filename: file.filename, path: file.path } : { message: 'File not found' };
    }
};
tslib_1.__decorate([
    common_1.Post('upload'),
    common_1.UseInterceptors(platform_express_1.FileInterceptor('file')),
    tslib_1.__param(0, common_1.UploadedFile()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], FilesController.prototype, "uploadFile", null);
tslib_1.__decorate([
    common_1.Get(':customeId'),
    tslib_1.__param(0, common_1.Param('customeId')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], FilesController.prototype, "getFile", null);
FilesController = tslib_1.__decorate([
    common_1.Controller('files'),
    tslib_1.__metadata("design:paramtypes", [file_service_1.FilesService])
], FilesController);
exports.FilesController = FilesController;
//# sourceMappingURL=file.controller.js.map