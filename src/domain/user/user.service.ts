import { ConflictException, Injectable } from '@nestjs/common';
import { Builder } from 'builder-pattern';
import { User } from '../../infra/database/entity/user.entity';
import { HouseRepository } from './../../infra/repository/house/house.repository';
import { UserRepository } from './../../infra/repository/user/user.repository';
import { CreateUserAdminDto } from './dto/create-user-admin.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly houseRepository: HouseRepository,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const existingUser = await this.userRepository.findOneUserByEmail(createUserDto.correoElectronico);

    if (existingUser) {
      throw new ConflictException('El correo electrónico ya está registrado');
    }

    const user = Builder<User>()
      .nombre(createUserDto.nombre)
      .correoElectronico(createUserDto.correoElectronico)
      .contrasena(createUserDto.contrasena)
      .telefono(createUserDto.telefono)
      .rol('vecino')
      .build();

    return this.userRepository.createUser(user);
  }

  async createUserAdmin(createUserDto: CreateUserAdminDto): Promise<User> {
    const house = await this.houseRepository.findOneHouse(createUserDto.casaId);
    const user = Builder<User>()
      .nombre(createUserDto.nombre)
      .correoElectronico(createUserDto.correoElectronico)
      .contrasena(createUserDto.contrasena)
      .telefono(createUserDto.telefono)
      .rol(createUserDto.rol)
      .casa(house)
      .build();
    return this.userRepository.createUser(user);
  }

  async updateUser(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const house = await this.houseRepository.findOneHouse(updateUserDto.casaId);
    const user = Builder<User>()
      .nombre(updateUserDto.nombre)
      .correoElectronico(updateUserDto.correoElectronico)
      .contrasena(updateUserDto.contrasena)
      .telefono(updateUserDto.telefono)
      .rol(updateUserDto.rol)
      .casa(house)
      .build();
    return this.userRepository.updateUser(id, user);
  }

  async deleteUser(id: number): Promise<void> {
    return this.userRepository.deleteUser(id);
  }

  async findOneUser(id: number): Promise<User | undefined> {
    return this.userRepository.findOneUser(id);
  }

  async findAllUsers(): Promise<User[]> {
    return this.userRepository.findAllUsers();
  }
}
