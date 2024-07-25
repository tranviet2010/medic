import { Logger } from '@nestjs/common';
import { ConsoleModule } from 'nestjs-console';
import { HeightModule } from './modules/height/height.module';
declare const Modules: (import("@nestjs/common").DynamicModule | typeof HeightModule | typeof Logger | typeof ConsoleModule)[];
export default Modules;
