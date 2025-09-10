import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class Job {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  company: string;

  @Column()
  location: string;

  @Column()
  type: string;

  @Column({ type: 'int', nullable: true })
  minSalary?: number;

  @Column({ type: 'int', nullable: true })
  maxSalary?: number;

  @Column({ type: 'timestamp', nullable: true })
  deadline?: Date;

  @Column({ type: 'text' })
  description: string;

  @CreateDateColumn({ type: 'timestamp' }) // automatically stores creation time
  createdAt: Date;
}
