import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { JobsModule } from './jobs/jobs.module';
import { Job } from './jobs/job.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '5432', 10),
      username: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD || 'Muuki@291024',
      database: process.env.DB_NAME || 'jobdb',
      entities: [Job],
      synchronize: true, // ⚠️ only for dev
      ssl: { rejectUnauthorized: false }, // always enable SSL with rejectUnauthorized false
    }),

    JobsModule,
  ],
})
export class AppModule {}
