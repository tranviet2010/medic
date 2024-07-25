"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const aws_sdk_1 = require("aws-sdk");
const config = require("config");
const linode_config = config.get('linode_config');
let UploadService = class UploadService {
    getLinode() {
        return new aws_sdk_1.S3({
            region: linode_config.region,
            endpoint: linode_config.domain,
            credentials: {
                accessKeyId: linode_config.access_key_id,
                secretAccessKey: linode_config.secret_access_key,
            },
        });
    }
    async uploadLinode(file) {
        const config = this.getLinode();
        const s3 = new aws_sdk_1.S3(config);
        const myFile = file.originalname.split('.');
        const fileType = myFile[myFile.length - 1];
        const fineName = myFile[0];
        const bucketName = linode_config.bucket_name;
        const finalName = `${fineName}_${new Date().toISOString()}.${fileType}`;
        const params = {
            Bucket: `${bucketName}`,
            Key: `${finalName}`,
            Body: file.buffer,
            ContentDisposition: 'inline',
            ContentType: `image/${fileType}`,
            ACL: 'public-read',
        };
        const { Location, Key } = await s3.upload(params).promise();
        return {
            Location,
            Key,
        };
    }
};
UploadService = tslib_1.__decorate([
    common_1.Injectable()
], UploadService);
exports.UploadService = UploadService;
//# sourceMappingURL=upload.service.js.map