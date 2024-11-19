import { Employee, EmployeeDto } from "@/common/type";
import { getEmployees } from ".";

export const editEmployee = async (
  employeeDto: EmployeeDto, id: number,
): Promise<Employee | null> => {
  const employees = await getEmployees();

  const targetIndex = employees.findIndex(employee => employee.id === id);

  if (targetIndex === -1) return null;

  const editedEmployee = { ...employeeDto, id };

  employees[targetIndex] = { ...employeeDto, id };

  localStorage.setItem(import.meta.env.VITE_STORAGE_KEY, JSON.stringify(employees));
  
  return editedEmployee;
}
