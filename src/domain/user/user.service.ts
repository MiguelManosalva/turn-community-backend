import { Injectable } from '@nestjs/common';
import { User } from '../../infra/database/entity/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { IUserRepository } from './interfaces/user.repository.interface';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: IUserRepository) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    return this.userRepository.createUser(createUserDto);
  }

  async updateUser(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    return this.userRepository.updateUser(id, updateUserDto);
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
