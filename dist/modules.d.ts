import { Logger } from '@nestjs/common';
import { ConsoleModule } from 'nestjs-console';
import { ClientModule } from './modules/client/client.module';
declare const Modules: (import("@nestjs/common").DynamicModule | typeof ClientModule | typeof Logger | typeof ConsoleModule)[];
export default Modules;
