import { Entity, Column, PrimaryGeneratedColumn, Unique, OneToMany } from 'typeorm';
import { Problem } from './problem.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 20, unique: true })
  @OneToMany(() => Problem, (problem) => problem.user)
  userId: string;
}
