import { DataSource } from 'typeorm';
import { House } from './entity/house.entity';
import { Notification } from './entity/notification.entity';
import { Shift } from './entity/shift.entity';
import { User } from './entity/user.entity';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        entities: [House, User, Shift, Notification],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
