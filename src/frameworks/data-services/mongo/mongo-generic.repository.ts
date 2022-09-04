import { Model } from 'mongoose';
import { IGenericRepository } from 'src/core';

export class MongoGenericRepository<T> implements IGenericRepository<T> {
  private _repository: Model<T>;
  private _populateOnField: string[];

  constructor(repository: Model<T>, populateOnField: string[] = []) {
    this._repository = repository;
    this._populateOnField = populateOnField;
  }

  getAll(): Promise<T[]> {
    return this._repository.find().populate(this._populateOnField).exec();
  }

  getById(id: string): Promise<any> {
    return this._repository.findById(id).populate(this._populateOnField).exec();
  }

  create(item: T): Promise<string | T> {
    return this._repository.create(item);
  }

  update(id: string, item: T) {
    return this._repository.findByIdAndUpdate(id, item);
  }

  remove(id: string) {
    return this._repository.findByIdAndRemove(id);
  }
}
