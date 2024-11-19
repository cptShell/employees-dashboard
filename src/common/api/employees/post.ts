import { Employee, EmployeeDto } from "@/common/type";
import { getEmployees } from ".";

export const createEmployee = async (employeeDto: EmployeeDto): Promise<Employee | null> => {
  const employees = await getEmployees();

  const newEmployeeId = !employees.length
    ? 1
    : employees.reduce((maxId, { id }) => id > maxId ? id : maxId, 1) + 1;
  const newEmployee = { ...employeeDto, id: newEmployeeId };

  const updatedEmployees = [...employees, newEmployee];

  localStorage.setItem(
    import.meta.env.VITE_STORAGE_KEY,
    JSON.stringify(updatedEmployees)
  );
  
  return newEmployee;
}
