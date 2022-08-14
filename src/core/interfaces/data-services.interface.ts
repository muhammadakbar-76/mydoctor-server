import { DocCategories, Doctor, News, RumahSakit, User } from '../entities';
import { IGenericRepository } from './generic-repository.interface';

export abstract class IDataServices {
  abstract docCategories: IGenericRepository<DocCategories>;

  abstract doctor: IGenericRepository<Doctor>;

  abstract rumahSakit: IGenericRepository<RumahSakit>;

  abstract user: IGenericRepository<User>;

  abstract news: IGenericRepository<News>;
}
