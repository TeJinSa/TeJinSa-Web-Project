import { Entity, Column, PrimaryGeneratedColumn, Unique, ManyToOne, CreateDateColumn } from 'typeorm';
import { PlatformLevel } from './platformLevel.entity';
import { User } from './user.entity';

@Entity()
export class Problem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  image: string;

  @Column()
  link: string;

  @ManyToOne(() => User, (user) => user.id)
  user: User;

  @ManyToOne(() => PlatformLevel, (platformLevel) => platformLevel.id)
  platformLevel: PlatformLevel;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;
}
