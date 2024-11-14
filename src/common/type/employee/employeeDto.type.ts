import { Employee } from "./employee.type";

export type EmployeeDto = Omit<Employee, "id">;
