import { AutoMap } from '@automapper/classes';

export class ReadUserDto {
  @AutoMap()
  fullname: string;

  @AutoMap()
  pekerjaan: string;

  @AutoMap()
  email: string;

  @AutoMap()
  image: string;
}
