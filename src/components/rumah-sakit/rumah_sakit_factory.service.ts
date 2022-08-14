import { Injectable } from '@nestjs/common';
import { RumahSakit } from '../../core';
import { CreateRumahSakitDto } from './dtos/create_rumah_sakit.dto';
import { UpdateRumahSakitDto } from './dtos/update_rumah_sakit.dto';

@Injectable()
export class RumahSakitFactoryService {
  createRumahSakit(createRumahSakitDto: CreateRumahSakitDto): RumahSakit {
    const rumahSakit = new RumahSakit();
    rumahSakit.name = createRumahSakitDto.name;
    rumahSakit.alamat = createRumahSakitDto.alamat;
    return rumahSakit;
  }

  updateRumahSakit(updateRumahSakitDto: UpdateRumahSakitDto): RumahSakit {
    const rumahSakit = new RumahSakit();
    rumahSakit.name = updateRumahSakitDto.name;
    rumahSakit.alamat = updateRumahSakitDto.alamat;
    return rumahSakit;
  }
}
