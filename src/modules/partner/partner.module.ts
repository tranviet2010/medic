

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Partner, PartnerSchema } from './schemas/partner.schema';
import { PartnerService } from './partner.service';
import { PartnerController } from './partner.controller';
import { UsersModule } from '../user/user.module';

@Module({
    imports: [MongooseModule.forFeature([{ name: Partner.name, schema: PartnerSchema }]),UsersModule],
    controllers: [
        PartnerController],
    providers: [
        PartnerService],
})
export class PartnerModule { }
