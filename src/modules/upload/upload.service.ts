import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { existsSync, mkdirSync, writeFile } from 'fs';
import { extname, join } from 'path';
import { Upload, UploadDocument } from './schemas/upload.schemas';
import * as fsExtra from 'fs-extra';

@Injectable()
export class FilesService {
  constructor(@InjectModel(Upload.name) private fileModel: Model<UploadDocument>) {}

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
    const uploadsPath = '/var/www/medic/uploads/';
    const fileName = file.originalname;
    const filePath = join(uploadsPath, fileName);

    // Kiểm tra nếu thư mục không tồn tại thì tạo mới
    if (!existsSync(uploadsPath)) {
      mkdirSync(uploadsPath, { recursive: true });
    }

    // Tạo tên file duy nhất (nếu cần thiết)
    const uniqueFileName = await this.getUniqueFileName(fileName);
    const uniqueFilePath = join(uploadsPath, uniqueFileName);

    // Lưu file vào thư mục
    fsExtra.writeFile(uniqueFilePath, file.buffer, (err) => {
      if (err) {
        console.error('Failed to save file:', err);
        throw new Error('Failed to save file');
      }
      console.log('File saved successfully');
    });

    // Giả sử bạn có một model để lưu thông tin file
    const newFile = new this.fileModel({
      filename: uniqueFileName,
      path: uniqueFilePath,
    });

    return newFile.save();
  }

  async getFileByCustomeId(customeId: string): Promise<UploadDocument> {
    return this.fileModel.findOne({ customeId }).exec();
  }
  
}
