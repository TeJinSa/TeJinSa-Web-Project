import dotenv from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';
import PlatformLevelSeeder from './src/seeds/platformLevel.seeder';

dotenv.config();

const options: DataSourceOptions & SeederOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DBNAME,
  synchronize: true,
  logging: true,
  entities: ['src/entities/*.ts'],
  seeds: [PlatformLevelSeeder],
};

export const db = new DataSource(options);
