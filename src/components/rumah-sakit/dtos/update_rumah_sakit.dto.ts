import { IsString } from 'class-validator';
import { CreateRumahSakitDto } from './create_rumah_sakit.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateRumahSakitDto extends PartialType(CreateRumahSakitDto) {
  @IsString()
  readonly name?: string;

  @IsString()
  readonly alamat?: string;
}
