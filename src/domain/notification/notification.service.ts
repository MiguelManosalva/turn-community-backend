import { Injectable } from '@nestjs/common';
import { Notification } from '../../infra/database/entity/notification.entity';
import { NotificationRepository } from './../../infra/repository/notification/notification.repository';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';

@Injectable()
export class NotificationService {
  constructor(
    private readonly notificationRepository: NotificationRepository,
  ) {}

  async createNotification(
    createNotificationDto: CreateNotificationDto,
  ): Promise<Notification> {
    return this.notificationRepository.createNotification(
      createNotificationDto,
    );
  }

  async updateNotification(
    id: number,
    updateNotificationDto: UpdateNotificationDto,
  ): Promise<Notification> {
    return this.notificationRepository.updateNotification(
      id,
      updateNotificationDto,
    );
  }

  async deleteNotification(id: number): Promise<void> {
    return this.notificationRepository.deleteNotification(id);
  }

  async findOneNotification(id: number): Promise<Notification> {
    return this.notificationRepository.findOneNotification(id);
  }

  async findAllNotifications(): Promise<Notification[]> {
    return this.notificationRepository.findAllNotifications();
  }
}
