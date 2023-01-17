import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Unique,
  ManyToOne,
  CreateDateColumn,
  JoinColumn,
  DeleteDateColumn,
} from 'typeorm';
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
  @JoinColumn({ referencedColumnName: 'userId', name: 'userId' })
  user: User;

  // @ManyToOne(() => PlatformLevel, (platformLevel) => platformLevel.id)
  @Column()
  platformLevelId: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @DeleteDateColumn()
  deletedAt?: Date;
}
