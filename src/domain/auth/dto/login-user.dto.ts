import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDto {
  @ApiProperty({ example: 'user@user.com', description: 'Email' })
  email: string;

  @ApiProperty({ example: 'Contraseña#123', description: 'Contraseña' })
  password: string;
}
