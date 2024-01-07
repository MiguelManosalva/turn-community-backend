import { ApiProperty } from '@nestjs/swagger';

export class StadisticDto {
  @ApiProperty({
    description: 'Cantidad de casas registradas',
    example: 12,
    type: Number,
  })
  houses: number;

  @ApiProperty({
    description: 'Cantidad de usuarios registrados',
    example: 22,
    type: Number,
  })
  users: number;

  @ApiProperty({
    description: 'Cantidad de turnos registrados',
    example: 32,
    type: Number,
  })
  shifts: number;
}
