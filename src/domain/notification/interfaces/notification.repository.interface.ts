import { Notification } from '../../../infra/database/entity/notification.entity';
import { CreateNotificationDto } from '../dto/create-notification.dto';
import { UpdateNotificationDto } from '../dto/update-notification.dto';

export interface INotificationRepository {
  createNotification(
    createNotificationDto: CreateNotificationDto,
  ): Promise<Notification>;
  updateNotification(
    id: number,
    updateNotificationDto: UpdateNotificationDto,
  ): Promise<Notification>;
  deleteNotification(id: number): Promise<void>;
  findOneNotification(id: number): Promise<Notification>;
  findAllNotifications(): Promise<Notification[]>;
}
