import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { IDataServices, RumahSakit } from '../../core';
import {
  CreateRumahSakitDto,
  ReadRumahSakitDto,
  UpdateRumahSakitDto,
} from './dtos/';

@Injectable()
export default class RumahSakitService {
  constructor(
    private readonly _dataServices: IDataServices,
    @InjectMapper() private readonly mapper: Mapper,
  ) {}

  async getAll() {
    return this.mapper.mapArrayAsync(
      await this._dataServices.rumahSakit.getAll(),
      RumahSakit,
      ReadRumahSakitDto,
    );
  }

  async getById(id: string) {
    return await this._dataServices.rumahSakit.getById(id);
  }

  create(createRumahSakitDto: CreateRumahSakitDto) {
    const rumahSakit = this.mapper.map(
      createRumahSakitDto,
      CreateRumahSakitDto,
      RumahSakit,
    );
    return this._dataServices.rumahSakit.create(rumahSakit);
  }

  update(id: string, updateRumahSakitDto: UpdateRumahSakitDto) {
    const updatedRumahSakit = this.mapper.map(
      updateRumahSakitDto,
      UpdateRumahSakitDto,
      RumahSakit,
    );
    return this._dataServices.rumahSakit.update(id, updatedRumahSakit);
  }

  delete(id: string) {
    return this._dataServices.rumahSakit.remove(id);
  }
}
