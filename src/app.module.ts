import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HouseController } from './application/house/house.controller';
import databaseConfig from './config/database.config';
import { HouseService } from './domain/house/house.service';
import { House } from './infra/database/entity/House';
import { HouseRepository } from './infra/repository/house/house.repository';
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
    TypeOrmModule.forFeature([House]),
  ],
  controllers: [AppController, HouseController], // Añade HouseController
  providers: [AppService, HouseService, HouseRepository], // Añade HouseService
})
export class AppModule {}
