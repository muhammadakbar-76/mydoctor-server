import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RumahSakit, rumahSakitSchema } from '../../core';
import RumahSakitProfile from '../../profiles/rumahSakitProfile';
import { DataServiceModule } from '../../services/data-service/data-service.module';
import RumahSakitController from './rumah_sakit.controller';
import RumahSakitService from './rumah_sakit.service';
import { RumahSakitFactoryService } from './rumah_sakit_factory.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: RumahSakit.name, schema: rumahSakitSchema },
    ]),
    DataServiceModule,
  ],
  controllers: [RumahSakitController],
  providers: [RumahSakitFactoryService, RumahSakitService, RumahSakitProfile],
})
export class RumahSakitModule {}
