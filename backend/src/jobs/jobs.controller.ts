import { Controller, Post, Get, Body } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { CreateJobDto } from './dto/create-job.dto';
import { Job } from './job.entity';

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Post()
  create(@Body() data: CreateJobDto): Promise<Job> {
    return this.jobsService.create(data);
  }

  @Get()
  findAll(): Promise<Job[]> {
    return this.jobsService.findAll();
  }
}
