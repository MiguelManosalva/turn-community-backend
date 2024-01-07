import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from '../../domain/user/user.service';
import { User } from '../../infra/database/entity/user.entity';
import { UserRepository } from '../../infra/repository/user/user.repository';
import { HouseModule } from '../house/house.module';
import { UserController } from './user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User]), HouseModule],
  controllers: [UserController],
  providers: [UserService, UserRepository],
  exports: [UserService, UserRepository],
})
export class UserModule {}
