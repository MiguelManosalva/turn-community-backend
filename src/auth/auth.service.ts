import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../infra/database/entity/user.entity';
import { CreateUserDto } from './../domain/user/dto/create-user.dto';
import { UserService } from './../domain/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<User | null> {
    const users = await this.userService.findAllUsers();
    const user = users.find(user => user.correoElectronico === email && user.contrasena === password);
    if (user) {
      const { contrasena, ...result } = user;
      return { ...result, contrasena };
    }
    return null;
  }

  async login(user: User) {
    const payload = { email: user.correoElectronico, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(createUserDto: CreateUserDto): Promise<User> {
    return this.userService.createUser(createUserDto);
  }
}
