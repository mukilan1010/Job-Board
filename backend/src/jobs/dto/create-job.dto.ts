import { IsString, IsOptional, IsInt, IsDateString } from 'class-validator';

export class CreateJobDto {
  @IsString()
  title: string;

  @IsString()
  company: string;

  @IsString()
  location: string;

  @IsString()
  type: string;

  @IsOptional()
  @IsInt()
  minSalary?: number;

  @IsOptional()
  @IsInt()
  maxSalary?: number;

  @IsOptional()
  @IsDateString()
  deadline?: Date;

    


  @IsString()
  description: string;

  @IsOptional()
  @IsDateString()
  createdAt?: Date;
}
