import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  DocCategories,
  Doctor,
  IDataServices,
  IGenericRepository,
  News,
  RumahSakit,
  User,
} from '../../../core';
import { MongoGenericRepository } from './mongo-generic.repository';

@Injectable()
export class MongoDataService implements IDataServices, OnApplicationBootstrap {
  docCategories: IGenericRepository<DocCategories>;
  doctor: IGenericRepository<Doctor>;
  news: IGenericRepository<News>;
  rumahSakit: IGenericRepository<RumahSakit>;
  user: IGenericRepository<User>;

  constructor(
    @InjectModel(DocCategories.name)
    private docCategoriesRepo: Model<DocCategories>,
    @InjectModel(Doctor.name) private doctorRepo: Model<Doctor>,
    @InjectModel(News.name) private newsRepo: Model<News>,
    @InjectModel(RumahSakit.name) private rumahSakitRepo: Model<RumahSakit>,
    @InjectModel(User.name) private userRepo: Model<User>,
  ) {}

  onApplicationBootstrap() {
    this.docCategories = new MongoGenericRepository(this.docCategoriesRepo);
    this.doctor = new MongoGenericRepository(this.doctorRepo, [
      'DocCategories',
      'RumahSakit',
    ]);
    this.news = new MongoGenericRepository(this.newsRepo);
    this.rumahSakit = new MongoGenericRepository(this.rumahSakitRepo);
    this.user = new MongoGenericRepository(this.userRepo);
  }
}
