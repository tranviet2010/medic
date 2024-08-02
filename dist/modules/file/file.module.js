"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilesModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const file_schemas_1 = require("./schemas/file.schemas");
const file_controller_1 = require("./file.controller");
const file_service_1 = require("./file.service");
let FilesModule = class FilesModule {
};
FilesModule = tslib_1.__decorate([
    common_1.Module({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: File.name, schema: file_schemas_1.FileSchema }])],
        controllers: [file_controller_1.FilesController],
        providers: [file_service_1.FilesService],
    })
], FilesModule);
exports.FilesModule = FilesModule;
//# sourceMappingURL=file.module.js.map