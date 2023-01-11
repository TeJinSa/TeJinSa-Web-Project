import dotenv from 'dotenv';
import { DataSource } from 'typeorm';

dotenv.config();

export const db = new DataSource({
	type: 'mysql',
	host: process.env.DB_HOST,
	port: Number(process.env.DB_PORT),
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DBNAME,
	synchronize: true,
	logging: true,
	entities: ['src/entities/*.ts'],
});
