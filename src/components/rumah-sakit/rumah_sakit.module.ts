import { Module } from '@nestjs/common';
import { DataServiceModule } from '../../services/data-service/data-service.module';
import { RumahSakitFactoryService } from './rumah_sakit_factory.service';

@Module({
  imports: [DataServiceModule],
  controllers: [],
  providers: [RumahSakitFactoryService],
})
export class RumahSakitModule {}
