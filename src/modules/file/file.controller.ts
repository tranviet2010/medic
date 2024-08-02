import { Controller, Get, Param, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FilesService } from './file.service';

@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) { }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.filesService.saveFile(file);
  }

  @Get(':customeId')
  async getFile(@Param('customeId') customeId: string) {
    const file = await this.filesService.getFileByCustomeId(customeId);
    return file ? { filename: file.filename, path: file.path } : { message: 'File not found' };
  }
}
