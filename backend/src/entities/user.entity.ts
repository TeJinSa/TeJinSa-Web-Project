import { Entity, Column, PrimaryGeneratedColumn, Unique, OneToMany } from 'typeorm';
import { Problem } from './problem.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  @OneToMany(() => Problem, (problem) => problem.user)
  id: number;

  @Column({ length: 20, unique: true })
  userId: string;
}
