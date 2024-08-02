/// <reference types="multer" />
import { Model } from 'mongoose';
import { FileDocument } from './schemas/file.schema';
export declare class FilesService {
    private fileModel;
    constructor(fileModel: Model<FileDocument>);
    saveFile(file: Express.Multer.File, customeId: string): Promise<any>;
    getFileByCustomeId(customeId: string): Promise<FileDocument>;
}
