import { Injectable } from '@nestjs/common';
import { Shift } from '../../infra/database/entity/shift.entity';
import { ShiftRepository } from './../../infra/repository/shift/shift.repository';
import { CreateShiftDto } from './dto/create-shift.dto';
import { UpdateShiftDto } from './dto/update-shift.dto';

@Injectable()
export class ShiftService {
  constructor(private readonly shiftRepository: ShiftRepository) {}

  async createShift(createShiftDto: CreateShiftDto): Promise<Shift> {
    return this.shiftRepository.createShift(createShiftDto);
  }

  async updateShift(id: number, updateShiftDto: UpdateShiftDto): Promise<Shift> {
    return this.shiftRepository.updateShift(id, updateShiftDto);
  }

  async deleteShift(id: number): Promise<void> {
    return this.shiftRepository.deleteShift(id);
  }

  async findOneShift(id: number): Promise<Shift> {
    return this.shiftRepository.findOneShift(id);
  }

  async findAllShifts(): Promise<Shift[]> {
    return await this.shiftRepository.findAllShifts();
  }
}
