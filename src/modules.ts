import { BullModule } from '@nestjs/bull';
import { CacheModule, Logger } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import * as redisStore from 'cache-manager-redis-store';
import { ConsoleModule } from 'nestjs-console';
import { mongodb } from 'src/configs/database.config';
import { redisConfig } from 'src/configs/redis.config';
import { HttpClientModule } from 'src/shares/http-clients/http.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { MailModule } from './modules/mail/mail.module';
import { ClientModule } from './modules/client/client.module';
import { ParamModule } from './modules/param/param.module';
import { NoseFemurModule } from './modules/nose-femur/param.module';
import { PartnerModule } from './modules/partner/partner.module';
import { CustomerModule } from './modules/customer/customer.module';
import { AgentModule } from './modules/agent/agent.module';
import { HeightModule } from './modules/height/height.module';
import { ResultModule } from './modules/result/result.module';
import { FilesModule } from './modules/upload/upload.module';
import { ProductModule } from './modules/product/product.module';
import { CourseModule } from './modules/course/course.module';
import { DocModule } from './modules/doc/doc.module';

const Modules = [
  Logger,
  MongooseModule.forRoot(mongodb.uri, mongodb.options),
  ScheduleModule.forRoot(),
  ConsoleModule,
  HttpClientModule,
  BullModule.forRoot({
    redis: redisConfig,
  }),
  CacheModule.register({
    store: redisStore,
    ...redisConfig,
    isGlobal: true,
  }),
  AuthModule,
  UsersModule,
  MailModule,
  ParamModule,
  ClientModule,
  NoseFemurModule,
  PartnerModule,
  CustomerModule,
  AgentModule,
  HeightModule,
  ResultModule,
  FilesModule,
  ProductModule,
  CourseModule,
  DocModule
];
export default Modules;
