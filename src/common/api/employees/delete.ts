import { Employee } from "@/common/type";
import { getEmployees } from ".";

export const deleteEmployee = async (id: number): Promise<Employee | null> => {
  const employees = await getEmployees();

  const deleteIndex = employees.findIndex(employee => employee.id === id);

  if (deleteIndex === -1) return null;

  const removedEmployee = employees.splice(deleteIndex, 1);

  localStorage.setItem(import.meta.env.VITE_STORAGE_KEY, JSON.stringify(employees));
  
  return removedEmployee[0];
}
