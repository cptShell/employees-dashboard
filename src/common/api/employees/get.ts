import { Employee } from "@/common/type";
import { sleep } from "@/utils";
import fs from "vite-plugin-fs/browser";

export const getEmployees = async (): Promise<Array<Employee>> => {
  await sleep(300);

  const json = await fs.readFile(import.meta.env.VITE_API_BASE);

  return JSON.parse(json);
}

export const getEmployee = async (id: number): Promise<Employee | null> => {
  const employees = await getEmployees();

  if (!employees.length) return null;

  return employees.find(employee => employee.id === id) || null;
}
