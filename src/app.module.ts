import { AutomapperModule } from '@automapper/nestjs';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { classes } from '@automapper/classes';
import { MongoDataServiceModule } from './frameworks/data-services/mongo/mongo.module';
import { MongooseModule } from '@nestjs/mongoose';
import { RumahSakitModule, UserModule } from './components';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AutomapperModule.forRoot({
      strategyInitializer: classes(),
    }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    MongoDataServiceModule,
    RumahSakitModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
