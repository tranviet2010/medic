"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const upload_controller_1 = require("./upload.controller");
const upload_service_1 = require("./upload.service");
let UploadModule = class UploadModule {
};
UploadModule = tslib_1.__decorate([
    common_1.Module({
        controllers: [upload_controller_1.UploadController],
        providers: [upload_service_1.UploadService]
    })
], UploadModule);
exports.UploadModule = UploadModule;
//# sourceMappingURL=upload.module.js.map