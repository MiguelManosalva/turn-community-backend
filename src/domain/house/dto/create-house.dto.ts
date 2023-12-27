import { ApiProperty } from '@nestjs/swagger';

export class CreateHouseDto {
  @ApiProperty({
    example: '3262',
    required: false,
    description: 'Número de casa',
  })
  numeroCasa: string;

  @ApiProperty({
    example: 'Casa de prueba',
    required: false,
    description: 'Descripción de la casa',
  })
  descripcion?: string;
}
