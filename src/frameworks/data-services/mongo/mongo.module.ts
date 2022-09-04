import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  DocCategories,
  docCategoriesSchema,
  Doctor,
  doctorSchema,
  IDataServices,
  News,
  newsSchema,
  RumahSakit,
  rumahSakitSchema,
  User,
  userSchema,
} from '../../../core';
import { MongoDataService } from './mongo-data.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: DocCategories.name, schema: docCategoriesSchema },
      { name: Doctor.name, schema: doctorSchema },
      { name: News.name, schema: newsSchema },
      { name: RumahSakit.name, schema: rumahSakitSchema },
      { name: User.name, schema: userSchema },
    ]),
  ],
  providers: [{ provide: IDataServices, useClass: MongoDataService }],
  exports: [IDataServices],
})
export class MongoDataServiceModule {}
