import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Notification } from '../../infra/database/entity/notification.entity';
import { CreateNotificationDto } from './../../domain/notification/dto/create-notification.dto';
import { UpdateNotificationDto } from './../../domain/notification/dto/update-notification.dto';
import { NotificationService } from './../../domain/notification/notification.service';

@Controller('api/notification')
@ApiTags('Notificaciones')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('JWT-Auth')
  @ApiOperation({ summary: 'Crear una notificación' })
  async createNotification(@Body() createNotificationDto: CreateNotificationDto): Promise<Notification> {
    return this.notificationService.createNotification(createNotificationDto);
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('JWT-Auth')
  @ApiOperation({ summary: 'Obtener una notificación' })
  async getNotification(@Param('id') id: number): Promise<Notification> {
    const notification = await this.notificationService.findOneNotification(id);
    if (!notification) throw new NotFoundException('Notification not found');
    return notification;
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('JWT-Auth')
  @ApiOperation({ summary: 'Obtener todas las notificaciones' })
  async getAllNotifications(): Promise<Notification[]> {
    return this.notificationService.findAllNotifications();
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('JWT-Auth')
  @ApiOperation({ summary: 'Actualizar una notificación' })
  async updateNotification(
    @Param('id') id: number,
    @Body() updateNotificationDto: UpdateNotificationDto,
  ): Promise<Notification> {
    return this.notificationService.updateNotification(id, updateNotificationDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('JWT-Auth')
  @ApiOperation({ summary: 'Eliminar una notificación' })
  async removeNotification(@Param('id') id: number): Promise<void> {
    await this.notificationService.deleteNotification(id);
  }
}
