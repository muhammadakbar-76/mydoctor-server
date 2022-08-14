import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type NewsDocument = News & Document;
@Schema()
export class News {
  @Prop({ required: true, unique: true })
  title: string;

  @Prop({ required: true })
  date: string;

  @Prop({ required: true })
  image: string;

  @Prop({ required: true })
  text: string;
}

export const newsSchema = SchemaFactory.createForClass(News);
