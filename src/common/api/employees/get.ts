import fs from "vite-plugin-fs/browser";
import { filterEmployees, sleep, sortEmployees } from "@/utils";
import { Employee, EmployeeSearchParams } from "@/common/type";

export const getEmployees = async (
  params?: EmployeeSearchParams
): Promise<Array<Employee>> => {
  await sleep(1500);

  const json = await fs.readFile(import.meta.env.VITE_API_BASE);
  let employees = JSON.parse(json) as Array<Employee>;

  if (typeof employees !== "object") return [];

  if (!params) return employees;

  const { sort, filter } = params;

  if (filter) employees = filterEmployees(filter, employees);

  return sortEmployees(sort, employees);
}

export const getEmployee = async (id: number): Promise<Employee | null> => {
  const employees = await getEmployees();

  if (!employees.length) return null;

  return employees.find(employee => employee.id === id) || null;
}
