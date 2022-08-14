export interface IGenericRepository<T> {
  getAll(): Promise<T[]>;

  getById(id: string): Promise<T>;

  create(item: T): Promise<T | string>;

  update(id: string, item: T);

  remove(id: string);
}
