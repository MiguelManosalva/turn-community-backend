import { User } from '../../../infra/database/entity/user.entity';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

export interface IUserRepository {
  createUser(createUserDto: CreateUserDto): Promise<User>;
  updateUser(id: number, updateUserDto: UpdateUserDto): Promise<User>;
  deleteUser(id: number): Promise<void>;
  findOneUser(id: number): Promise<User | undefined>;
  findAllUsers(): Promise<User[]>;
}
