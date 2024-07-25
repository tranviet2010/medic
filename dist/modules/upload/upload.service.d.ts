/// <reference types="multer" />
import { S3 } from 'aws-sdk';
import { ResUploadDto } from './dto/res-upload.dto';
export declare class UploadService {
    getLinode(): S3;
    uploadLinode(file: Express.Multer.File): Promise<ResUploadDto>;
}
