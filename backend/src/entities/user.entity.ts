import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity()
export class User {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ length: 20, unique: true })
	githubId: string;

	@Column()
	image: string;
}
