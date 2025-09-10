import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { JobsModule } from './jobs/jobs.module';
import { Job } from './jobs/job.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'Muuki@291024',
  database: 'jobdb',
  entities: [Job],
  synchronize: true, // ⚠️ auto-creates tables in dev
}),

    JobsModule,
  ],
})
export class AppModule {}
