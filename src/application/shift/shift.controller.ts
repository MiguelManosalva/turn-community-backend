import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Shift } from '../../infra/database/entity/shift.entity';
import { CreateShiftDto } from './../../domain/shift/dto/create-shift.dto';
import { UpdateShiftDto } from './../../domain/shift/dto/update-shift.dto';
import { ShiftService } from './../../domain/shift/shift.service';

@Controller('api/shift')
@ApiTags('Turnos')
export class ShiftController {
  constructor(private readonly shiftService: ShiftService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un turno' })
  async createShift(@Body() createShiftDto: CreateShiftDto): Promise<Shift> {
    return this.shiftService.createShift(createShiftDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un turno' })
  async getShift(@Param('id') id: number): Promise<Shift> {
    const shift = await this.shiftService.findOneShift(id);
    if (!shift) throw new NotFoundException('Shift not found');
    return shift;
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los turnos' })
  async getAllShifts(): Promise<Shift[]> {
    return this.shiftService.findAllShifts();
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar un turno' })
  async updateShift(@Param('id') id: number, @Body() updateShiftDto: UpdateShiftDto): Promise<Shift> {
    return this.shiftService.updateShift(id, updateShiftDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un turno' })
  async removeShift(@Param('id') id: number): Promise<void> {
    await this.shiftService.deleteShift(id);
  }
}
