import { filterEmployees, setInitialEmployees, sleep, sortEmployees } from "@/utils";
import { Employee, EmployeeSearchParams } from "@/common/type";

export const getEmployees = async (
  params?: EmployeeSearchParams
): Promise<Array<Employee>> => {
  await sleep(1500);

  const savedEmployeesJson = localStorage.getItem(import.meta.env.VITE_STORAGE_KEY);
  const json = savedEmployeesJson !== null ? savedEmployeesJson : setInitialEmployees();

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
