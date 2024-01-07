import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { User } from '../../infra/database/entity/user.entity';
import { CreateUserDto } from './../../domain/user/dto/create-user.dto';
import { UpdateUserDto } from './../../domain/user/dto/update-user.dto';
import { UserService } from './../../domain/user/user.service';

@Controller('api/user')
@ApiTags('Usuarios')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('JWT-Auth')
  @ApiOperation({ summary: 'Crear un usuario' })
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.createUser(createUserDto);
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('JWT-Auth')
  @ApiOperation({ summary: 'Obtener un usuario' })
  async getUser(@Param('id') id: number): Promise<User> {
    const user = await this.userService.findOneUser(id);
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('JWT-Auth')
  @ApiOperation({ summary: 'Obtener todos los usuarios' })
  async getAllUsers(): Promise<User[]> {
    return this.userService.findAllUsers();
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('JWT-Auth')
  @ApiOperation({ summary: 'Actualizar un usuario' })
  async updateUser(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto): Promise<User> {
    return this.userService.updateUser(id, updateUserDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('JWT-Auth')
  @ApiOperation({ summary: 'Eliminar un usuario' })
  async removeUser(@Param('id') id: number): Promise<void> {
    await this.userService.deleteUser(id);
  }
}
