import { AutoMap } from '@automapper/classes';
import { PartialType } from '@nestjs/mapped-types';
import { IsOptional, IsString } from 'class-validator';
import { IsFile, MaxFileSize } from 'nestjs-form-data';
import { CreateUserDto } from './create_user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @AutoMap()
  @IsString()
  readonly fullname?: string;

  @AutoMap()
  @IsString()
  readonly pekerjaan?: string;

  @AutoMap()
  @IsString()
  readonly email?: string;

  @AutoMap()
  @IsString()
  readonly password?: string;

  @IsString()
  readonly newPassword?: string;

  @IsOptional()
  @IsFile()
  @MaxFileSize(100000)
  image?: any;
}
