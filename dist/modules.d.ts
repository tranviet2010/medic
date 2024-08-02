import { Logger } from '@nestjs/common';
import { ConsoleModule } from 'nestjs-console';
import { FilesModule } from './modules/upload/upload.module';
declare const Modules: (import("@nestjs/common").DynamicModule | typeof FilesModule | typeof Logger | typeof ConsoleModule)[];
export default Modules;
