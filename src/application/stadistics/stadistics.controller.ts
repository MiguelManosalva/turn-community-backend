import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { HouseService } from '../../domain/house/house.service';
import { ShiftService } from './../../domain/shift/shift.service';
import { StadisticDto } from './../../domain/stadistics/dto/stadistics.dto';
import { UserService } from './../../domain/user/user.service';

@Controller('api/stadistics')
@ApiTags('Estadisticas')
export class StadisticsController {
  constructor(
    private readonly houseService: HouseService,
    private readonly userService: UserService,
    private readonly shiftService: ShiftService,
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
}
