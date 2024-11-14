import { EmployeeRole } from "@/common/enum";
import { RoleOption } from "@/common/type";

export const ROLE_OPTIONS: Array<RoleOption> = [
  { label: "все", value: undefined },
  { label: "повар", value: EmployeeRole.COOK },
  { label: "водитель", value: EmployeeRole.DRIVER },
  { label: "офицант", value: EmployeeRole.WAITER },
];
