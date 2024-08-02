"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilesService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const fs_1 = require("fs");
const path_1 = require("path");
let FilesService = class FilesService {
    constructor(fileModel) {
        this.fileModel = fileModel;
    }
    async getUniqueFileName(originalName) {
        const fileExtName = path_1.extname(originalName);
        const baseName = originalName.replace(fileExtName, '');
        let newFileName = originalName;
        let counter = 1;
        while (await this.fileModel.findOne({ filename: newFileName }).exec()) {
            newFileName = `${baseName}(${counter++})${fileExtName}`;
        }
        return newFileName;
    }
    async saveFile(file) {
        const uploadsPath = path_1.join(__dirname, '../../../uploads', file.originalname);
        if (!fs_1.existsSync(uploadsPath)) {
            fs_1.mkdirSync(uploadsPath, { recursive: true });
        }
        const uniqueFileName = await this.getUniqueFileName(file.originalname);
        const filePath = path_1.join(uploadsPath, uniqueFileName);
        fs_1.writeFile(filePath, file.buffer, (err) => {
            if (err) {
                console.error('Failed to save file:', err);
                throw new Error('Failed to save file');
            }
            console.log('File saved successfully');
        });
        const newFile = new this.fileModel({
            filename: uniqueFileName,
            path: filePath,
        });
        return newFile.save();
    }
    async getFileByCustomeId(customeId) {
        return this.fileModel.findOne({ customeId }).exec();
    }
};
FilesService = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__param(0, mongoose_1.InjectModel(File.name)),
    tslib_1.__metadata("design:paramtypes", [mongoose_2.Model])
], FilesService);
exports.FilesService = FilesService;
//# sourceMappingURL=upload.service.js.map