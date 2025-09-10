// types.ts
export type Job = {
  id: number;
  company: string;
  title: string;
  type: string;
  location: string;
  minSalary?: number;
  maxSalary?: number;
  deadline?: string;
  description: string;
  createdAt:string;
};

export type FilterValues = {
  search: string;
  location: string;
  type: string;
  salary: [number, number] | null; // ✅ allow null
};
