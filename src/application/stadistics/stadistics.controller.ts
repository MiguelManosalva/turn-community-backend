import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { HouseService } from '../../domain/house/house.service';
import { ShiftService } from './../../domain/shift/shift.service';
import { StadisticDto } from './../../domain/stadistics/dto/stadistics.dto';
import { WeatherDto } from './../../domain/stadistics/dto/weather.dto';
import { UserService } from './../../domain/user/user.service';
import { WeatherProvider } from './../../infra/provider/weather.provider';

@Controller('api/stadistics')
@ApiTags('Estadisticas')
export class StadisticsController {
  constructor(
    private readonly houseService: HouseService,
    private readonly userService: UserService,
    private readonly shiftService: ShiftService,
    private readonly weatherProvider: WeatherProvider,
  ) {}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('JWT-Auth')
  @ApiOperation({ summary: 'Obtiene la cantidad de casas, usuarios y turnos' })
  async getStatistics(): Promise<StadisticDto> {
    const houses = await this.houseService.findAllHouses();
    const users = await this.userService.findAllUsers();
    const shifts = await this.shiftService.findAllShifts();

    const response = {
      houses: houses.length,
      users: users.length,
      shifts: shifts.length,
    };

    return response;
  }

  @Get('/weather')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('JWT-Auth')
  @ApiOperation({ summary: 'Obtiene el tiempo actual de la comuna del vecindario' })
  async getWeather(): Promise<WeatherDto> {
    return this.weatherProvider.getWeather();
  }
}
