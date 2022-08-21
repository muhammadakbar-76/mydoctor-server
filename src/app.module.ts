import { AutomapperModule } from '@automapper/nestjs';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { classes } from '@automapper/classes';
import { MongooseModule } from '@nestjs/mongoose';
import { RumahSakitModule } from './components/rumah-sakit/rumah_sakit.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AutomapperModule.forRoot({
      strategyInitializer: classes(),
    }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    RumahSakitModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
