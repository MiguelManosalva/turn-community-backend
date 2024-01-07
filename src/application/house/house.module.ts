import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HouseService } from './../../domain/house/house.service';
import { House } from './../../infra/database/entity/house.entity';
import { HouseRepository } from './../../infra/repository/house/house.repository';
import { HouseController } from './house.controller';

@Module({
  imports: [TypeOrmModule.forFeature([House])],
  controllers: [HouseController],
  providers: [HouseService, HouseRepository],
  exports: [HouseService, HouseRepository],
})
export class HouseModule {}
