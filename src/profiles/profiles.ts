import { createMap, Mapper, MappingProfile } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import {
  CreateUserDto,
  ReadUserDto,
  UpdateUserDto,
} from '../components/user/dtos';
import {
  CreateRumahSakitDto,
  ReadRumahSakitDto,
  UpdateRumahSakitDto,
} from '../components/rumah-sakit/dtos';
import { RumahSakit, User } from '../core';

@Injectable()
export default class Profiles extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile(): MappingProfile {
    return (mapper) => {
      //* Rumah Sakit Profile
      createMap(mapper, RumahSakit, ReadRumahSakitDto);
      createMap(mapper, CreateRumahSakitDto, RumahSakit);
      createMap(mapper, UpdateRumahSakitDto, RumahSakit);
      //* User Profile
      createMap(mapper, User, ReadUserDto);
      createMap(mapper, CreateUserDto, User);
      createMap(mapper, UpdateUserDto, User);
    };
  }
}
