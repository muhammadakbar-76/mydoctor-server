import { AutoMap } from '@automapper/classes';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @AutoMap()
  @Prop({ required: true })
  fullname: string;

  @AutoMap()
  @Prop({ required: true })
  pekerjaan: string;

  @AutoMap()
  @Prop({ required: true, unique: true })
  email: string;

  @AutoMap()
  @Prop({ required: true })
  password: string;

  @Prop({ required: false, default: '/images/null.png' })
  image: string;

  @AutoMap()
  @Prop({ required: false })
  fcmToken: string;
}

export const userSchema = SchemaFactory.createForClass(User);
