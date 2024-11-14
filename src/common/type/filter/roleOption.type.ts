import { EmployeeRole } from "@/common/enum";
import { Nullable, Option } from "@/common/type";

export type RoleOption = Option<Nullable<EmployeeRole>>;
