import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateShiftDto } from '../../../domain/shift/dto/create-shift.dto';
import { UpdateShiftDto } from '../../../domain/shift/dto/update-shift.dto';
import { IShiftRepository } from '../../../domain/shift/interfaces/shift.repository.interface';
import { Shift } from '../../database/entity/shift.entity';
import { House } from './../../database/entity/house.entity';

@Injectable()
export class ShiftRepository implements IShiftRepository {
  constructor(
    @InjectRepository(Shift)
    private readonly shiftRepository: Repository<Shift>,
    @InjectRepository(House)
    private readonly houseRepository: Repository<House>,
  ) {}

  async createShift(createShiftDto: CreateShiftDto): Promise<Shift> {
    const house = await this.houseRepository.findOne({ where: { id: createShiftDto.casaId } });
    if (!house) {
      throw new NotFoundException(`Casa con ID ${createShiftDto.casaId} no encontrada`);
    }

    const newShift = this.shiftRepository.create({
      ...createShiftDto,
      casa: house,
    });

    return this.shiftRepository.save(newShift);
  }

  async updateShift(id: number, updateShiftDto: UpdateShiftDto): Promise<Shift> {
    const shift = await this.shiftRepository.findOne({ where: { id }, relations: ['casa', 'casa.usuarios'] });
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
    const shiftWithHouse = await this.shiftRepository.findOne({
      where: { id },
      relations: ['casa'],
    });

    if (!shiftWithHouse) {
      throw new NotFoundException(`Turno con ID ${id} no encontrado`);
    }

    return shiftWithHouse;
  }

  async findAllShifts(): Promise<Shift[]> {
    const shifts = await this.shiftRepository.find({ relations: ['casa', 'casa.usuarios'] });

    if (shifts.length === 0) {
      return [];
    }

    return shifts;
  }
}
