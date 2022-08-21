import { AutoMap } from '@automapper/classes';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateRumahSakitDto {
  @AutoMap()
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @AutoMap()
  @IsNotEmpty()
  @IsString()
  readonly alamat: string;
}
