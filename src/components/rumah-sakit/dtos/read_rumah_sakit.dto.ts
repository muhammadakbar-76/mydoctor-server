import { AutoMap } from '@automapper/classes';

export class ReadRumahSakitDto {
  @AutoMap()
  name: string;

  @AutoMap()
  alamat: string;
}
