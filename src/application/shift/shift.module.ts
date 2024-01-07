import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShiftService } from './../../domain/shift/shift.service';
import { House } from './../../infra/database/entity/house.entity';
import { Shift } from './../../infra/database/entity/shift.entity';
import { ShiftRepository } from './../../infra/repository/shift/shift.repository';
import { ShiftController } from './shift.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Shift, House])],
  controllers: [ShiftController],
  providers: [ShiftService, ShiftRepository],
  exports: [ShiftService],
})
export class ShiftModule {}
