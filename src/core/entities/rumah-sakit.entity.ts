import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type RumahSakitDocument = RumahSakit & Document;
@Schema()
export class RumahSakit {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop()
  alamat: string;
}

export const rumahSakitSchema = SchemaFactory.createForClass(RumahSakit);
