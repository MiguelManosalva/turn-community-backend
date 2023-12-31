import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { HouseController } from './application/house/house.controller';
import { HouseModule } from './application/house/house.module';
import { NotificationController } from './application/notification/notification.controller';
import { ShiftController } from './application/shift/shift.controller';
import { ShiftModule } from './application/shift/shift.module';
import { StadisticsController } from './application/stadistics/stadistics.controller';
import { UserController } from './application/user/user.controller';
import { UserModule } from './application/user/user.module';
import { AuthModule } from './auth/auth.module';
import databaseConfig from './config/database.config';
import { NotificationService } from './domain/notification/notification.service';
import { House } from './infra/database/entity/house.entity';
import { Notification } from './infra/database/entity/notification.entity';
import { Shift } from './infra/database/entity/shift.entity';
import { User } from './infra/database/entity/user.entity';
import { WeatherProvider } from './infra/provider/weather.provider';
import { NotificationRepository } from './infra/repository/notification/notification.repository';

@Module({
  imports: [
    AuthModule,
    UserModule,
    ShiftModule,
    HouseModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => configService.get('database'),
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature([House, User, Shift, Notification]),
  ],
  controllers: [HouseController, UserController, ShiftController, NotificationController, StadisticsController],
  providers: [AppService, NotificationService, NotificationRepository, WeatherProvider],
})
export class AppModule {}
