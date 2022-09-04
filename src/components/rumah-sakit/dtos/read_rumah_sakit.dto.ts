import { AutoMap } from '@automapper/classes';

export class ReadRumahSakitDto {
  @AutoMap()
  _id: any;

  @AutoMap()
  name: string;

  @AutoMap()
  alamat: string;
}
