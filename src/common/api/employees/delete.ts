import { Employee } from "@/common/type";
import fs from "vite-plugin-fs/browser";
import { getEmployees } from ".";

export const deleteEmployee = async (id: number): Promise<Employee | null> => {
  const employees = await getEmployees();

  const deleteIndex = employees.findIndex(employee => employee.id === id);

  if (deleteIndex === -1) return null;

  const removedEmployee = employees.splice(deleteIndex, 1);

  await fs.writeFile(import.meta.env.VITE_API_BASE, JSON.stringify(employees));
  
  return removedEmployee[0];
}
