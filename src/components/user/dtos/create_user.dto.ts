import { AutoMap } from '@automapper/classes';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { IsFile, MaxFileSize } from 'nestjs-form-data';

export class CreateUserDto {
  @IsString()
  @AutoMap()
  @IsNotEmpty()
  fullname: string;

  @AutoMap()
  @IsString()
  @IsNotEmpty()
  pekerjaan: string;

  @IsNotEmpty()
  @AutoMap()
  @IsEmail()
  email: string;

  @IsString()
  @AutoMap()
  @IsNotEmpty()
  password: string;

  @IsOptional()
  @IsFile()
  @MaxFileSize(100000)
  image?: any;

  @IsOptional()
  @AutoMap()
  @IsString()
  fcmToken: string;
}
