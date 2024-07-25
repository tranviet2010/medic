/// <reference types="multer" />
import { UploadService } from './upload.service';
import { ResUploadDto } from './dto/res-upload.dto';
export declare class UploadController {
    private uploadService;
    constructor(uploadService: UploadService);
    uploadFile(file: Express.Multer.File): Promise<ResUploadDto>;
}
