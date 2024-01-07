import { User } from '../../../infra/database/entity/user.entity';

export interface IUserRepository {
  createUser(createUserDto: User): Promise<User>;
  updateUser(id: number, updateUserDto: User): Promise<User>;
  deleteUser(id: number): Promise<void>;
  findOneUser(id: number): Promise<User | undefined>;
  findAllUsers(): Promise<User[]>;
}
