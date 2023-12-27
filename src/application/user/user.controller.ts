import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { User } from '../../infra/database/entity/user.entity';
import { CreateUserDto } from './../../domain/user/dto/create-user.dto';
import { UpdateUserDto } from './../../domain/user/dto/update-user.dto';
import { UserService } from './../../domain/user/user.service';

@Controller('user')
@ApiTags('Usuarios')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un usuario' })
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.createUser(createUserDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un usuario' })
  async getUser(@Param('id') id: number): Promise<User> {
    const user = await this.userService.findOneUser(id);
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los usuarios' })
  async getAllUsers(): Promise<User[]> {
    return this.userService.findAllUsers();
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar un usuario' })
  async updateUser(
    @Param('id') id: number,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<User> {
    return this.userService.updateUser(id, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un usuario' })
  async removeUser(@Param('id') id: number): Promise<void> {
    await this.userService.deleteUser(id);
  }
}
