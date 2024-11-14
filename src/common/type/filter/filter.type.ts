import { EmployeeRole } from "@/common/enum";

export type EmployeeFilter = {
  role?: EmployeeRole;
  isArchive?: boolean;
}
