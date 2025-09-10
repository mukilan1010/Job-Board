"use client";

import {
  Container,
  Group,
  TextInput,
  Select,
  RangeSlider,
  Text,
  Paper,
  Flex,
  Button,
} from "@mantine/core";
import { IconSearch, IconMapPin, IconBriefcase } from "@tabler/icons-react";

type FilterValues = {
  search: string;
  location: string;
  type: string;
  salary: [number, number] | null; // allow empty
};

type Props = {
  filters: FilterValues;
  setFilters: (filters: FilterValues) => void;
};

export default function Filters({ filters, setFilters }: Props) {
  const defaultSalary: [number, number] = [10000, 100000];

  return (
    <Paper
      shadow="xs"
      radius="0"
      style={{
        borderBottom: "1px solid #eee",
        backgroundColor: "white",
      }}
    >
      <Container size="lg" py="md">
        <Flex gap="md" align="center" wrap="wrap">
          {/* Search */}
          <TextInput
            placeholder="Search by Job Title, Role"
            leftSection={<IconSearch size={18} />}
            radius="md"
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
            style={{ flex: 1, minWidth: 250 }}
          />

          {/* Location */}
          <Select
            placeholder="Preferred Location"
            leftSection={<IconMapPin size={18} />}
            radius="md"
            data={["Chennai", "Bangalore", "Hyderabad"]}
            value={filters.location}
            onChange={(val) => setFilters({ ...filters, location: val || "" })}
            style={{ width: 200 }}
          />

          {/* Job type */}
          <Select
            placeholder="Job Type"
            leftSection={<IconBriefcase size={18} />}
            radius="md"
            data={["Full Time", "Part Time", "Internship"]}
            value={filters.type}
            onChange={(val) => setFilters({ ...filters, type: val || "" })}
            style={{ width: 180 }}
          />

          {/* Salary Range */}
          <div style={{ flex: 1, minWidth: 250 }}>
            <Text size="sm" mb={4}>
              Salary Per Month{" "}
              {filters.salary && (
                <Text span fw={600} c="blue">
                  ₹{Math.floor(filters.salary[0] / 1000)}k - ₹
                  {Math.floor(filters.salary[1] / 1000)}k
                </Text>
              )}
            </Text>
            <RangeSlider
              min={0}
              max={100000}
              step={5000}
              radius="md"
              value={filters.salary || defaultSalary}
              onChange={(val) =>
                setFilters({ ...filters, salary: val as [number, number] })
              }
              label={(val) => `₹${Math.floor(val / 1000)}k`}
            />
          </div>

          
        </Flex>
      </Container>
    </Paper>
  );
}
