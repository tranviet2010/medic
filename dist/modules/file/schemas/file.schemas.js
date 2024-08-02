"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileSchema = exports.File = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = require("@nestjs/mongoose");
let File = class File {
};
tslib_1.__decorate([
    mongoose_1.Prop({ required: false }),
    tslib_1.__metadata("design:type", String)
], File.prototype, "customeId", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", String)
], File.prototype, "filename", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", String)
], File.prototype, "path", void 0);
File = tslib_1.__decorate([
    mongoose_1.Schema({ timestamps: true, collection: 'files' }),
    mongoose_1.Schema()
], File);
exports.File = File;
exports.FileSchema = mongoose_1.SchemaFactory.createForClass(File);
//# sourceMappingURL=file.schemas.js.map