import { ApiProperty } from '@nestjs/swagger';

export class WeatherDto {
  @ApiProperty({
    description: 'Temperatura en grados celsius',
    example: 22,
    type: Number,
  })
  temperature: number;

  @ApiProperty({
    description: 'Temperatura en min actual en grados celsius',
    example: 25,
    type: Number,
  })
  temperatureMin: number;

  @ApiProperty({
    description: 'Temperatura en max actual en grados celsius',
    example: 25,
    type: Number,
  })
  temperatureMax: number;

  @ApiProperty({
    description: 'Humendad actual en porcentaje',
    example: 25,
    type: Number,
  })
  humidity: number;

  @ApiProperty({
    description: 'Tiempo actual',
    example: 'Parcialmente nublado',
    type: String,
  })
  weather: string;

  @ApiProperty({
    description: 'Precipitaciones',
    example: 'no',
    type: String,
  })
  precipitation: string;
}
