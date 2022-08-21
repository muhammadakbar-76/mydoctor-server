import { AutoMap } from '@automapper/classes';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type RumahSakitDocument = RumahSakit & Document;
@Schema()
export class RumahSakit {
  @AutoMap()
  @Prop({ required: true, unique: true })
  name: string;

  @AutoMap()
  @Prop({ unique: true })
  alamat: string;
}

export const rumahSakitSchema = SchemaFactory.createForClass(RumahSakit);
