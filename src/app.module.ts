import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { HouseController } from './application/house/house.controller';
import { NotificationController } from './application/notification/notification.controller';
import { ShiftController } from './application/shift/shift.controller';
import { UserController } from './application/user/user.controller';
import databaseConfig from './config/database.config';
import { HouseService } from './domain/house/house.service';
import { NotificationService } from './domain/notification/notification.service';
import { ShiftService } from './domain/shift/shift.service';
import { UserService } from './domain/user/user.service';
import { House } from './infra/database/entity/house.entity';
import { Notification } from './infra/database/entity/notification.entity';
import { Shift } from './infra/database/entity/shift.entity';
import { User } from './infra/database/entity/user.entity';
import { HouseRepository } from './infra/repository/house/house.repository';
import { NotificationRepository } from './infra/repository/notification/notification.repository';
import { ShiftRepository } from './infra/repository/shift/shift.repository';
import { UserRepository } from './infra/repository/user/user.repository'; // Asegúrate de importar UserRepository

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) =>
        configService.get('database'),
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature([House, User, Shift, Notification]),
  ],
  controllers: [
    HouseController,
    UserController,
    ShiftController,
    NotificationController,
  ],
  providers: [
    AppService,
    HouseService,
    UserService,
    ShiftService,
    NotificationService,
    HouseRepository,
    UserRepository,
    ShiftRepository,
    NotificationRepository,
  ],
})
export class AppModule {}
