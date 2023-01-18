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

  @Column({ type: 'varchar', length: 500 })
  image: string;

  @Column({ type: 'varchar', length: 500 })
  link: string;

  // @ManyToOne(() => User, (user) => user.id)
  // @JoinColumn({ referencedColumnName: 'userId', name: 'userId' })
  // user: User;

  @Column()
  userId: string;

  // @ManyToOne(() => PlatformLevel, (platformLevel) => platformLevel.id)
  @Column()
  platformLevelId: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @DeleteDateColumn()
  deletedAt?: Date;
}
