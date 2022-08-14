import { IsNotEmpty, IsString } from 'class-validator';

export class CreateRumahSakitDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  readonly alamat: string;
}
