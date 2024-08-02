"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilesModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const upload_controller_1 = require("./upload.controller");
const upload_service_1 = require("./upload.service");
const upload_schemas_1 = require("./schemas/upload.schemas");
let FilesModule = class FilesModule {
};
FilesModule = tslib_1.__decorate([
    common_1.Module({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: File.name, schema: upload_schemas_1.UploadSchema }])],
        controllers: [upload_controller_1.FilesController],
        providers: [upload_service_1.FilesService],
    })
], FilesModule);
exports.FilesModule = FilesModule;
//# sourceMappingURL=upload.module.js.map