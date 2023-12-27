import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateNotificationDto } from './../../../domain/notification/dto/create-notification.dto';
import { UpdateNotificationDto } from './../../../domain/notification/dto/update-notification.dto';
import { INotificationRepository } from './../../../domain/notification/interfaces/notification.repository.interface';
import { Notification } from './../../database/entity/notification.entity';

@Injectable()
export class NotificationRepository implements INotificationRepository {
  constructor(
    @InjectRepository(Notification)
    private readonly notificationRepository: Repository<Notification>,
  ) {}

  async createNotification(
    createNotificationDto: CreateNotificationDto,
  ): Promise<Notification> {
    const newNotification = this.notificationRepository.create(
      createNotificationDto,
    );
    return this.notificationRepository.save(newNotification);
  }

  async updateNotification(
    id: number,
    updateNotificationDto: UpdateNotificationDto,
  ): Promise<Notification> {
    const notification = await this.notificationRepository.findOne({
      where: { id },
    });
    if (!notification) {
      throw new NotFoundException(`Notification with ID ${id} not found`);
    }

    await this.notificationRepository.update(id, updateNotificationDto);
    return this.notificationRepository.findOne({ where: { id } });
  }

  async deleteNotification(id: number): Promise<void> {
    await this.notificationRepository.delete(id);
  }

  async findOneNotification(id: number): Promise<Notification | undefined> {
    return this.notificationRepository.findOne({ where: { id } });
  }

  async findAllNotifications(): Promise<Notification[]> {
    return this.notificationRepository.find();
  }
}
