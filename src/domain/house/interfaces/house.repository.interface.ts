import { House } from '../../../infra/database/entity/House';
import { CreateHouseDto } from '../dto/create-house.dto';
import { UpdateHouseDto } from '../dto/update-house.dto';

export interface IHouseRepository {
  createHouse(createHouseDto: CreateHouseDto): Promise<House>;
  updateHouse(id: number, updateHouseDto: UpdateHouseDto): Promise<House>;
  deleteHouse(id: number): Promise<void>;
  findOneHouse(id: number): Promise<House>;
  findAllHouses(): Promise<House[]>;
}
