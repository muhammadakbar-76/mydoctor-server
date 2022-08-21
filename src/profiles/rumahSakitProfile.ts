import { createMap, Mapper, MappingProfile } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import {
  CreateRumahSakitDto,
  ReadRumahSakitDto,
  UpdateRumahSakitDto,
} from '../components/rumah-sakit/dtos';
import { RumahSakit } from '../core';

@Injectable()
export default class RumahSakitProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile(): MappingProfile {
    return (mapper) => {
      createMap(mapper, RumahSakit, ReadRumahSakitDto);
      createMap(mapper, CreateRumahSakitDto, RumahSakit);
      createMap(mapper, UpdateRumahSakitDto, RumahSakit);
    };
  }
}
