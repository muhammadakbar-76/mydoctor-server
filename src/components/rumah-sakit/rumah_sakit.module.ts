import { Module } from '@nestjs/common';
import Profiles from '../../profiles/profiles';
import { DataServiceModule } from '../../services/data-service/data-service.module';
import RumahSakitController from './rumah_sakit.controller';
import RumahSakitService from './rumah_sakit.service';

@Module({
  imports: [DataServiceModule],
  controllers: [RumahSakitController],
  providers: [RumahSakitService, Profiles],
})
export class RumahSakitModule {}
