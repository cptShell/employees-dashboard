import { Employee, EmployeeDto } from "@/common/type";
import fs from "vite-plugin-fs/browser";
import { getEmployees } from ".";

export const editEmployee = async (
  employeeDto: EmployeeDto, id: number,
): Promise<Employee | null> => {
  const employees = await getEmployees();

  const targetIndex = employees.findIndex(employee => employee.id === id);

  if (targetIndex === -1) return null;

  const editedEmployee = { ...employeeDto, id };

  employees[targetIndex] = { ...employeeDto, id };

  await fs.writeFile(import.meta.env.VITE_API_BASE, JSON.stringify(employees));
  
  return editedEmployee;
}
