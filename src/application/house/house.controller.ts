import {
    Body,
    Controller,
    Delete,
    Get,
    NotFoundException,
    Param,
    Patch,
    Post,
} from '@nestjs/common';
import { House } from '../../infra/database/entity/House';
import { CreateHouseDto } from './../../domain/house/dto/create-house.dto';
import { UpdateHouseDto } from './../../domain/house/dto/update-house.dto';
import { HouseService } from './../../domain/house/house.service';

@Controller('house')
export class HouseController {
  constructor(private readonly houseService: HouseService) {}

  @Post()
  async createHouse(@Body() createHouseDto: CreateHouseDto): Promise<House> {
    return this.houseService.createHouse(createHouseDto);
  }

  @Get(':id')
  async getHouse(@Param('id') id: number): Promise<House> {
    const house = await this.houseService.findOneHouse(id);
    if (!house) throw new NotFoundException('House not found');
    return house;
  }

  @Get()
  async getAllHouses(): Promise<House[]> {
    return this.houseService.findAllHouses();
  }

  @Patch(':id')
  async updateHouse(
    @Param('id') id: number,
    @Body() updateHouseDto: UpdateHouseDto,
  ): Promise<House> {
    return this.houseService.updateHouse(id, updateHouseDto);
  }

  @Delete(':id')
  async removeHouse(@Param('id') id: number): Promise<void> {
    await this.houseService.deleteHouse(id);
  }
}
