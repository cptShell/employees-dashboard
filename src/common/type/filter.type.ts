import { EmployeeRole } from "../enum"

export type EmployeeFilter = {
  role?: EmployeeRole;
  isArchive?: boolean;
}
