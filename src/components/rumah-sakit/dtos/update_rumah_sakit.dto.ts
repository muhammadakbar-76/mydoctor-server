import { IsString } from 'class-validator';
import { CreateRumahSakitDto } from './create_rumah_sakit.dto';
import { PartialType } from '@nestjs/mapped-types';
import { AutoMap } from '@automapper/classes';

export class UpdateRumahSakitDto extends PartialType(CreateRumahSakitDto) {
  @AutoMap()
  @IsString()
  readonly name?: string;

  @AutoMap()
  @IsString()
  readonly alamat?: string;
}
