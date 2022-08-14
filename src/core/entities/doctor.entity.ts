import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type DoctorDocument = Doctor & Document;
@Schema()
export class Doctor {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'DocCategories',
    required: true,
  })
  doc_category_id: string;

  @Prop()
  alumnus: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'RumahSakit',
    required: true,
  })
  RS_id: string;

  @Prop()
  STR: string;
}

export const doctorSchema = SchemaFactory.createForClass(Doctor);
