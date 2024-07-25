"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContentType = exports.getUrl = exports.SupportedImageMIMETypes = exports.UploadFileTypes = void 0;
const mime_types_1 = require("mime-types");
const common_1 = require("@nestjs/common");
const config = require("config");
const linode_config = config.get('linode_config');
var UploadFileTypes;
(function (UploadFileTypes) {
    UploadFileTypes["IMAGE"] = "image";
    UploadFileTypes["VIDEO"] = "video";
})(UploadFileTypes = exports.UploadFileTypes || (exports.UploadFileTypes = {}));
exports.SupportedImageMIMETypes = [
    'image/apng',
    'image/png',
    'image/jpeg',
    'image/avif',
    'image/gif',
    'image/svg+xml',
    'image/webp',
    'image/bmp',
];
function getUrl(blobName) {
    return `${linode_config.base_url}${blobName}`;
}
exports.getUrl = getUrl;
const getContentType = (fileName) => {
    const contentType = mime_types_1.contentType(fileName);
    const ext = mime_types_1.extension(contentType || '');
    if (!contentType || !ext) {
        throw new common_1.BadRequestException('File name is not valid');
    }
    return {
        ContentType: contentType,
        extension: ext,
    };
};
exports.getContentType = getContentType;
//# sourceMappingURL=upload.utils.js.map