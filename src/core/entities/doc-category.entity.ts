import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type DocCategoriesDocument = DocCategories & Document;
@Schema()
export class DocCategories {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop()
  image: string;
}

export const docCategoriesSchema = SchemaFactory.createForClass(DocCategories);
