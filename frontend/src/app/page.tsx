"use client";

import { useEffect, useState, useCallback } from "react";
import { Container, SimpleGrid } from "@mantine/core";
import Navbar from "../components/Navbar";
import Filters from "../components/Filters";
import JobCard from "../components/JobCard";
import { Job, FilterValues } from "../types";

export default function HomePage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filters, setFilters] = useState<FilterValues>({
    search: "",
    location: "",
    type: "",
    salary: null,
  });

  // fetch jobs (can be reused later)
  const fetchJobs = useCallback(() => {
    fetch("http://localhost:4000/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data))
      .catch((err) => console.error("❌ Error fetching jobs:", err));
  }, []);

  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  // Apply filters
  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      !filters.search ||
      job.title.toLowerCase().includes(filters.search.toLowerCase()) ||
      job.company.toLowerCase().includes(filters.search.toLowerCase());

    const matchesLocation = !filters.location || job.location === filters.location;
    const matchesType = !filters.type || job.type === filters.type;

    const matchesSalary =
      !filters.salary ||
      ((job.minSalary ?? 0) <= filters.salary[1] &&
        (job.maxSalary ?? Infinity) >= filters.salary[0]);

    return matchesSearch && matchesLocation && matchesType && matchesSalary;
  });

  return (
    <>
      <Navbar onJobCreated={fetchJobs} /> {/* 👈 Pass refresh function */}
      <Filters filters={filters} setFilters={setFilters} />
      <Container size="lg" py="xl">
        <SimpleGrid cols={4} spacing="lg">
          {filteredJobs.map((job) => (
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
              posted={job.createdAt}
              description={job.description}
            />
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
}
