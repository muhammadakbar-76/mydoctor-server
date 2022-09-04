import { Module } from '@nestjs/common';
import Profiles from '../../profiles/profiles';
import { DataServiceModule } from '../../services/data-service/data-service.module';
import UserController from './user.controller';
import UserService from './user.service';

@Module({
  imports: [DataServiceModule],
  controllers: [UserController],
  providers: [UserService, Profiles],
})
export class UserModule {}
