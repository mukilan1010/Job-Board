"use client";

import {
  Modal,
  TextInput,
  Select,
  Group,
  Button,
  Textarea,
  NumberInput,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useForm } from "react-hook-form";
import { Job } from "../types";

type Props = {
  opened: boolean;
  onClose: () => void;
  onJobCreated?: (job: Job) => void;
};

type JobForm = {
  title: string;
  company: string;
  location: string;
  type: string;
  minSalary: number;
  maxSalary: number;
  deadline: Date | null;
  description: string;
};

export default function CreateJobModal({ opened, onClose, onJobCreated }: Props) {
  const { register, handleSubmit, setValue, reset } = useForm<JobForm>();

  const onSubmit = async (data: JobForm) => {
    try {
      const response = await fetch("http://localhost:4000/jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to create job");

      const result: Job = await response.json();

      // Ensure the job has an ID (temporary if API doesn't return one)
      if (!result.id) result.id = Date.now();

      // Convert deadline to string if it's Date
      const formattedJob: Job = {
        ...result,
        deadline: result.deadline ? new Date(result.deadline).toISOString() : undefined,
      };

      // Add job to list instantly
      onJobCreated && onJobCreated(formattedJob);

      reset(); // clear form
      onClose();
    } catch (error) {
      console.error("❌ Error creating job:", error);
    }
  };

  return (
    <Modal opened={opened} onClose={onClose} size="lg" title="Create Job Opening" centered>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Group grow mb="md">
          <TextInput label="Job Title" placeholder="Full Stack Developer" {...register("title")} />
          <TextInput label="Company Name" placeholder="Amazon, Microsoft" {...register("company")} />
        </Group>

        <Group grow mb="md">
          <Select
            label="Location"
            placeholder="Choose Location"
            data={["Chennai", "Bangalore", "Hyderabad"]}
            onChange={(val) => setValue("location", val || "")}
          />
          <Select
            label="Job Type"
            placeholder="FullTime"
            data={["FullTime", "PartTime", "Internship"]}
            onChange={(val) => setValue("type", val || "")}
          />
        </Group>

        <Group grow mb="md">
          <NumberInput label="Salary Min" placeholder="₹0" prefix="₹ " onChange={(val) => setValue("minSalary", Number(val))} />
          <NumberInput label="Salary Max" placeholder="₹12,00,000" prefix="₹ " onChange={(val) => setValue("maxSalary", Number(val))} />
        </Group>

        <DateInput label="Application Deadline" placeholder="Pick date" onChange={(val) => setValue("deadline", val ? new Date(val) : null)} mb="md" />

        <Textarea label="Job Description" placeholder="Please share a description..." autosize minRows={3} {...register("description")} />

        <Group justify="space-between" mt="lg">
          <Button variant="outline">Save Draft</Button>
          <Button type="submit" color="blue">Publish</Button>
        </Group>
      </form>
    </Modal>
  );
}
