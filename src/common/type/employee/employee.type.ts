import { EmployeeRole } from "@/common/enum";

export type Employee = {
  id: number,
  name: string,
  isArchive: boolean,
  role: EmployeeRole,
  phone: string;
  birthday: string;
};
