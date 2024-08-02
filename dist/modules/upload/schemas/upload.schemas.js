"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadSchema = exports.Upload = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = require("@nestjs/mongoose");
let Upload = class Upload {
};
tslib_1.__decorate([
    mongoose_1.Prop({ required: false }),
    tslib_1.__metadata("design:type", String)
], Upload.prototype, "customeId", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", String)
], Upload.prototype, "filename", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", String)
], Upload.prototype, "path", void 0);
Upload = tslib_1.__decorate([
    mongoose_1.Schema({ timestamps: true, collection: 'files' }),
    mongoose_1.Schema()
], Upload);
exports.Upload = Upload;
exports.UploadSchema = mongoose_1.SchemaFactory.createForClass(Upload);
//# sourceMappingURL=upload.schemas.js.map