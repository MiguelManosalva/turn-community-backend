import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateShiftDto } from '../../../domain/shift/dto/create-shift.dto';
import { UpdateShiftDto } from '../../../domain/shift/dto/update-shift.dto';
import { IShiftRepository } from '../../../domain/shift/interfaces/shift.repository.interface';
import { Shift } from '../../database/entity/shift.entity';

@Injectable()
export class ShiftRepository implements IShiftRepository {
  constructor(
    @InjectRepository(Shift)
    private readonly shiftRepository: Repository<Shift>,
  ) {}

  async createShift(createShiftDto: CreateShiftDto): Promise<Shift> {
    const newShift = this.shiftRepository.create(createShiftDto);
    return this.shiftRepository.save(newShift);
  }

  async updateShift(
    id: number,
    updateShiftDto: UpdateShiftDto,
  ): Promise<Shift> {
    const shift = await this.shiftRepository.findOne({ where: { id } });
    if (!shift) {
      throw new NotFoundException(`Shift with ID ${id} not found`);
    }

    await this.shiftRepository.update(id, updateShiftDto);
    return this.shiftRepository.findOne({ where: { id } });
  }

  async deleteShift(id: number): Promise<void> {
    await this.shiftRepository.delete(id);
  }

  async findOneShift(id: number): Promise<Shift> {
    return this.shiftRepository.findOne({ where: { id } });
  }

  async findAllShifts(): Promise<Shift[]> {
    return this.shiftRepository.find();
  }
}
