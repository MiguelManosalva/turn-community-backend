import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'Nombre completo del usuario',
    example: 'Juan Pérez',
    type: String,
  })
  nombre: string;

  @ApiProperty({
    description: 'Correo electrónico del usuario',
    example: 'juan.perez@example.com',
    type: String,
  })
  correoElectronico: string;

  @ApiProperty({
    description: 'Contraseña para la cuenta del usuario',
    example: 'ContraseñaSegura123',
    type: String,
  })
  contrasena: string;

  @ApiProperty({
    description: 'Número de teléfono móvil del usuario',
    example: '+34123456789',
    type: String,
  })
  telefono: string;

  @ApiProperty({
    description: 'Identificador de la casa asociada al usuario',
    example: 1,
    type: Number,
  })
  casaId: number;
}
