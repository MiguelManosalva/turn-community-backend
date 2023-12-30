import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginDto {
  @ApiProperty({ example: 'usuario@example.com' })
  @IsEmail()
  readonly email: string;

  @ApiProperty({ example: 'contraseña123' })
  @IsNotEmpty()
  readonly password: string;
}
