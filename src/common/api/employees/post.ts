import { Employee, EmployeeDto } from "@/common/type";
import fs from "vite-plugin-fs/browser";
import { getEmployees } from ".";

export const createEmployee = async (employeeDto: EmployeeDto): Promise<Employee | null> => {
  const employees = await getEmployees();

  const newEmployeeId = !employees.length
    ? 1
    : employees.reduce((maxId, { id }) => id > maxId ? id : maxId, 1) + 1;
  const newEmployee = { ...employeeDto, id: newEmployeeId };

  const updatedEmployees = [...employees, newEmployee];

  fs.writeFile(import.meta.env.VITE_API_BASE, JSON.stringify(updatedEmployees));
  
  return newEmployee;
}
