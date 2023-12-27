import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty({
    description: 'Nombre completo del usuario',
    example: 'Elba Lazo',
    type: String,
  })
  nombre?: string;

  @ApiProperty({
    description: 'Correo electrónico del usuario',
    example: 'elba.lazo@example.com',
    type: String,
  })
  correoElectronico?: string;

  @ApiProperty({
    description: 'Contraseña para la cuenta del usuario',
    example: 'ContraseñaSegura123',
    type: String,
  })
  contrasena?: string;

  @ApiProperty({
    description: 'Rol del usuario en el sistema',
    example: 'vecino',
    enum: ['vecino', 'administrador'],
  })
  rol?: 'vecino' | 'administrador';

  @ApiProperty({
    description: 'Número de teléfono móvil del usuario',
    example: '+34123456789',
    type: String,
  })
  telefonoMovil?: string;

  @ApiProperty({
    description: 'Identificador de la casa asociada al usuario',
    example: 1,
    type: Number,
  })
  casaId: number;
}
