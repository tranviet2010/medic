

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Partner, PartnerSchema } from './schemas/partner.schema';
import { PartnerService } from './partner.service';
import { PartnerController } from './partner.controller';

@Module({
    imports: [MongooseModule.forFeature([{ name: Partner.name, schema: PartnerSchema }])],
    controllers: [
        PartnerController],
    providers: [
        PartnerService],
})
export class PartnerModule { }
