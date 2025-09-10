"use client";

import { SimpleGrid } from "@mantine/core";
import JobCard from "./JobCard";
import { Job } from "../types";

type JobListProps = {
  jobs: Job[];
};

export default function JobList({ jobs }: JobListProps) {
  return (
    <SimpleGrid cols={3} spacing="lg" mt="lg">
      {jobs.map((job) => (
        <JobCard
          key={job.id}
          companyName={job.company}
          role={job.title}
          exp={job.type}
          mode={job.location}
          salary={
            job.minSalary && job.maxSalary
              ? `${job.minSalary} - ${job.maxSalary}`
              : "Not specified"
          }
          posted={job.deadline ? new Date(job.deadline).toLocaleDateString() : "N/A"}
          description={job.description}
        />
      ))}
    </SimpleGrid>
  );
}
