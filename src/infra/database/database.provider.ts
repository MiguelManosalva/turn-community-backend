import { DataSource } from 'typeorm';
import { House } from './entity/House';
import { Notification } from './entity/Notification';
import { Shift } from './entity/Shift';
import { User } from './entity/User';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        entities: [House, User, Shift, Notification],
        synchronize: true, // Nota: usar con precaución en producción
      });

      return dataSource.initialize();
    },
  },
];
