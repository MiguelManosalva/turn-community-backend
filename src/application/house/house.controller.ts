import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { House } from '../../infra/database/entity/house.entity';
import { CreateHouseDto } from './../../domain/house/dto/create-house.dto';
import { UpdateHouseDto } from './../../domain/house/dto/update-house.dto';
import { HouseService } from './../../domain/house/house.service';

@Controller('house')
@ApiTags('Casas')
export class HouseController {
  constructor(private readonly houseService: HouseService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('JWT-Auth')
  @ApiOperation({ summary: 'Crear una casa' })
  async createHouse(@Body() createHouseDto: CreateHouseDto): Promise<House> {
    return this.houseService.createHouse(createHouseDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una casa' })
  async getHouse(@Param('id') id: number): Promise<House> {
    const house = await this.houseService.findOneHouse(id);
    if (!house) throw new NotFoundException('House not found');
    return house;
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todas las casas' })
  async getAllHouses(): Promise<House[]> {
    return this.houseService.findAllHouses();
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('JWT-Auth')
  @ApiOperation({ summary: 'Actualizar una casa' })
  async updateHouse(@Param('id') id: number, @Body() updateHouseDto: UpdateHouseDto): Promise<House> {
    return this.houseService.updateHouse(id, updateHouseDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('JWT-Auth')
  @ApiOperation({ summary: 'Eliminar una casa' })
  async removeHouse(@Param('id') id: number): Promise<void> {
    await this.houseService.deleteHouse(id);
  }
}
