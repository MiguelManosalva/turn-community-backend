import { ApiProperty } from '@nestjs/swagger';

export class UpdateShiftDto {
  @ApiProperty({
    description: 'Fecha y hora de inicio del turno',
    example: '2023-01-01T08:00:00.000Z',
    type: Date,
  })
  fechaInicio?: Date;

  @ApiProperty({
    description: 'Fecha y hora de fin del turno',
    example: '2023-01-01T12:00:00.000Z',
    type: Date,
  })
  fechaFin?: Date;

  @ApiProperty({
    description: 'Identificador de la casa asociada al turno',
    example: 1,
    type: Number,
  })
  casaId: number;

  @ApiProperty({
    description: 'Estado del turno',
    example: 'asignado',
    enum: ['asignado', 'completado', 'pendiente'],
  })
  estado?: 'asignado' | 'completado' | 'pendiente';
}
