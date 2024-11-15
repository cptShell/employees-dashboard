import { FC } from "react";
import { EmployeeRole } from "@/common/enum";
import { EMPLOYEE_ROLE_LABEL } from "@/common/constant";
import styles from "./style.module.scss";

type Props = {
  role: EmployeeRole;
}

export const RoleBadge: FC<Props> = ({ role }) => {
  return (
    <div>
      <p className={styles.role}>{EMPLOYEE_ROLE_LABEL[role]}</p>
    </div>
  );
}
