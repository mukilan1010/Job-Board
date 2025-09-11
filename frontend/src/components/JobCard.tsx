"use client";

import { Card, Text, Button, Group, Badge, Avatar, Stack } from "@mantine/core";
import { IconUser, IconBuilding, IconMapPin } from "@tabler/icons-react";

type JobProps = {
  companyName: string;
  role: string;
  exp: string;
  mode: string;
  salary: string;
  posted: string;
  description: string;
};

function getTimeAgo(dateString?: string) {
  if (!dateString) return "N/A";
  const postedDate = new Date(dateString);
  if (isNaN(postedDate.getTime())) return "N/A";

  const now = new Date();
  const diffMs = now.getTime() - postedDate.getTime();

  let diffMins = Math.floor(diffMs / (1000 * 60));
  diffMins = Math.max(diffMins, 0); 
  if (diffMins < 60) return `${diffMins}m ago`;

  const diffHrs = Math.floor(diffMins / 60);
  return `${diffHrs}h ago`;
}



export default function JobCard({
  companyName,
  role,
  exp,
  mode,
  salary,
  posted,
  description,
}: JobProps) {
  return (
    <Card
      shadow="sm"
      radius="lg"
      padding="xl"
      withBorder
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "320px",
      }}
    >
      {/* Header */}
      <Group justify="space-between" mb="md">
        <Avatar size={50} radius="md" color="gray" variant="filled">
          {companyName.charAt(0).toUpperCase()}
        </Avatar>
        <Badge color="blue" variant="light" radius="sm">
          {getTimeAgo(posted)}
        </Badge>
      </Group>

      {/* Job Role */}
      <Text fw={700} fz="lg" mb="sm">
        {role}
      </Text>

      {/* Job Details */}
      <Stack gap={6} mb="sm">
        <Group gap="xs">
          <IconUser size={16} />
          <Text fz="sm" c="dimmed">
            {exp}
          </Text>
        </Group>
        <Group gap="xs">
          <IconBuilding size={16} />
          <Text fz="sm" c="dimmed">
            {mode}
          </Text>
        </Group>
        <Group gap="xs">
          <IconMapPin size={16} />
          <Text fz="sm" c="dimmed">
            {salary}
          </Text>
        </Group>
      </Stack>

      {/* Description */}
      <Text fz="sm" c="dimmed" lineClamp={2} mb="lg">
        {description}
      </Text>

      {/* Apply Button */}
      <Button color="blue" radius="md" fullWidth>
        Apply Now
      </Button>
    </Card>
  );
}
