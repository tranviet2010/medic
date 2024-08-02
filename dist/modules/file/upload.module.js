"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilesModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const files_service_1 = require("./files.service");
const files_controller_1 = require("./files.controller");
const file_schema_1 = require("./schemas/file.schema");
let FilesModule = class FilesModule {
};
FilesModule = tslib_1.__decorate([
    common_1.Module({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: file_schema_1.File.name, schema: file_schema_1.FileSchema }])],
        controllers: [files_controller_1.FilesController],
        providers: [files_service_1.FilesService],
    })
], FilesModule);
exports.FilesModule = FilesModule;
//# sourceMappingURL=upload.module.js.map