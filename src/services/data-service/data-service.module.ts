import { Module } from '@nestjs/common';
import { MongoDataServiceModule } from '../../frameworks/data-services/mongo/mongo.module';

@Module({
  imports: [MongoDataServiceModule],
  exports: [MongoDataServiceModule],
})
export class DataServiceModule {}
