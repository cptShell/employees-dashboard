import { EmployeeRole, SortName } from "@/common/enum";

export type Employee = {
  id: number,
  [SortName.NAME]: string,
  isArchive: boolean,
  role: EmployeeRole,
  phone: string;
  [SortName.BIRTHDAY]: string;
};
