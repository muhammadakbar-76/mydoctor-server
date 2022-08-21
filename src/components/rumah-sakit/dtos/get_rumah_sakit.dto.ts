import { IsMongoId } from 'class-validator';

export class GetRumahSakitDto {
  @IsMongoId()
  id: string;
}
