import { Injectable } from '@nestjs/common';
import { House } from '../../infra/database/entity/House';
import { HouseRepository } from './../../infra/repository/house/house.repository';
import { CreateHouseDto } from './dto/create-house.dto';
import { UpdateHouseDto } from './dto/update-house.dto';

@Injectable()
export class HouseService {
  constructor(private readonly houseRepository: HouseRepository) {}

  async createHouse(createHouseDto: CreateHouseDto): Promise<House> {
    return this.houseRepository.createHouse(createHouseDto);
  }

  async updateHouse(
    id: number,
    updateHouseDto: UpdateHouseDto,
  ): Promise<House> {
    return this.houseRepository.updateHouse(id, updateHouseDto);
  }

  async deleteHouse(id: number): Promise<void> {
    return this.houseRepository.deleteHouse(id);
  }

  async findOneHouse(id: number): Promise<House> {
    return this.houseRepository.findOneHouse(id);
  }

  async findAllHouses(): Promise<House[]> {
    return this.houseRepository.findAllHouses();
  }
}
