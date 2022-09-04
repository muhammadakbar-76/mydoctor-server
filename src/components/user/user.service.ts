import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { IDataServices, User } from '../../core';
import { CreateUserDto, ReadUserDto, UpdateUserDto } from './dtos';

@Injectable()
export default class UserService {
  constructor(
    private readonly _dataServices: IDataServices,
    @InjectMapper() private readonly mapper: Mapper,
  ) {}

  async getAll() {
    return this.mapper.mapArrayAsync(
      await this._dataServices.user.getAll(),
      User,
      ReadUserDto,
    );
  }

  async getById(id: string) {
    return await this._dataServices.user.getById(id);
  }

  create(createUserDto: CreateUserDto) {
    const user = this.mapper.map(createUserDto, CreateUserDto, User);
    return this._dataServices.user.create(user);
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    const updatedUser = this.mapper.map(updateUserDto, UpdateUserDto, User);
    return this._dataServices.user.update(id, updatedUser);
  }

  delete(id: string) {
    return this._dataServices.user.remove(id);
  }
}
