import { Injectable } from '@nestjs/common';
import { Shift } from '../../infra/database/entity/shift.entity';
import { CreateShiftDto } from './dto/create-shift.dto';
import { UpdateShiftDto } from './dto/update-shift.dto';
import { IShiftRepository } from './interfaces/shift.repository.interface';

@Injectable()
export class ShiftService {
  constructor(private readonly shiftRepository: IShiftRepository) {}

  async createShift(createShiftDto: CreateShiftDto): Promise<Shift> {
    return this.shiftRepository.createShift(createShiftDto);
  }

  async updateShift(
    id: number,
    updateShiftDto: UpdateShiftDto,
  ): Promise<Shift> {
    return this.shiftRepository.updateShift(id, updateShiftDto);
  }

  async deleteShift(id: number): Promise<void> {
    return this.shiftRepository.deleteShift(id);
  }

  async findOneShift(id: number): Promise<Shift> {
    return this.shiftRepository.findOneShift(id);
  }

  async findAllShifts(): Promise<Shift[]> {
    return this.shiftRepository.findAllShifts();
  }
}
