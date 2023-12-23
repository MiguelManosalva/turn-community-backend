import { registerAs } from '@nestjs/config';

export default registerAs('database', () => {
  const configuration = {
    type: 'mysql',
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10) || 3306,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    synchronize: process.env.DATABASE_SYNCHRONIZE === 'true',
  };

  return configuration;
});
