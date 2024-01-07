import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IUserRepository } from '../../../domain/user/interfaces/user.repository.interface';
import { User } from '../../database/entity/user.entity';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createUser(createUser: User): Promise<User> {
    const newUser = this.userRepository.create(createUser);
    return this.userRepository.save(newUser);
  }

  async updateUser(id: number, user: User): Promise<User> {
    await this.userRepository.update(id, user);
    return this.userRepository.findOne({ where: { id } });
  }

  async deleteUser(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }

  async findOneUser(id: number): Promise<User> {
    return this.userRepository.findOne({ where: { id } });
  }

  async findOneUserByEmail(correoElectronico: string): Promise<User> {
    return this.userRepository.findOne({ where: { correoElectronico } });
  }

  async findAllUsers(): Promise<User[]> {
    return this.userRepository.find();
  }
}
