import { Entity, Column, PrimaryGeneratedColumn, Unique, ManyToOne, OneToMany } from 'typeorm';
import { Problem } from './problem.entity';

@Entity()
export class PlatformLevel {
  @PrimaryGeneratedColumn()
  @OneToMany(() => Problem, (problem) => problem.platformLevel)
  id: number;

  @Column()
  platformName: string;

  @Column()
  levelName: string;

  @Column()
  game: number;
}
