import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { House } from '../../database/entity/House';
import { CreateHouseDto } from './../../../domain/house/dto/create-house.dto';
import { UpdateHouseDto } from './../../../domain/house/dto/update-house.dto';
import { IHouseRepository } from './../../../domain/house/interfaces/house.repository.interface';

@Injectable()
export class HouseRepository implements IHouseRepository {
  constructor(
    @InjectRepository(House)
    private readonly houseRepository: Repository<House>,
  ) {}

  async createHouse(createHouseDto: CreateHouseDto): Promise<House> {
    const newHouse = this.houseRepository.create(createHouseDto);
    return this.houseRepository.save(newHouse);
  }

  async updateHouse(
    id: number,
    updateHouseDto: UpdateHouseDto,
  ): Promise<House> {
    const house = await this.houseRepository.findOne({ where: { id } });
    if (!house) {
      // Lanzar alguna excepción o manejar el caso de no encontrado
    }

    await this.houseRepository.update(id, updateHouseDto);
    return this.houseRepository.findOne({ where: { id } });
  }

  async deleteHouse(id: number): Promise<void> {
    await this.houseRepository.delete(id);
  }

  async findOneHouse(id: number): Promise<House> {
    return this.houseRepository.findOne({ where: { id } });
  }

  async findAllHouses(): Promise<House[]> {
    return this.houseRepository.find();
  }
}
