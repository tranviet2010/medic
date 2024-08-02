import { Logger } from '@nestjs/common';
import { ConsoleModule } from 'nestjs-console';
import { ProductModule } from './modules/product/product.module';
declare const Modules: (import("@nestjs/common").DynamicModule | typeof ProductModule | typeof Logger | typeof ConsoleModule)[];
export default Modules;
