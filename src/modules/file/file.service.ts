import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { existsSync, mkdirSync, writeFile } from 'fs';
import { extname, join } from 'path';
import { FileDocument } from './schemas/file.schemas';

@Injectable()
export class FilesService {
  constructor(@InjectModel(File.name) private fileModel: Model<FileDocument>) {}

  private async getUniqueFileName(originalName: string): Promise<string> {
    const fileExtName = extname(originalName);
    const baseName = originalName.replace(fileExtName, '');
    let newFileName = originalName;
    let counter = 1;

    while (await this.fileModel.findOne({ filename: newFileName }).exec()) {
      newFileName = `${baseName}(${counter++})${fileExtName}`;
    }

    return newFileName;
  }

  async saveFile(file: Express.Multer.File) {
    const uploadsPath = join(__dirname, '../../../uploads', file.originalname);

    if (!existsSync(uploadsPath)) {
      mkdirSync(uploadsPath, { recursive: true });
    }

    const uniqueFileName = await this.getUniqueFileName(file.originalname);
    const filePath = join(uploadsPath, uniqueFileName);

    writeFile(filePath, file.buffer, (err) => {
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

  async getFileByCustomeId(customeId: string): Promise<FileDocument> {
    return this.fileModel.findOne({ customeId }).exec();
  }
}
