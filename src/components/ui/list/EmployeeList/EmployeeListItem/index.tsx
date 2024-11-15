import { FC } from "react";
import { RoleAnimation } from "@/components/ui/animation";
import { AcrchiveBadge, RoleBadge } from "@/components/ui/badge";
import { Employee } from "@/common/type"
import { EmployeeDetails } from "../EmployeeDetails";
import styles from "./styles.module.scss";

type Props = {
  employee: Employee;
}

export const EmployeeListItem: FC<Props> = ({ employee }) => {
  return (
    <li
      className={styles.item}
      key={employee.id}
      onClick={() => { console.log(employee); }}
    >
      <div className={styles.container}>
        <div className={styles.heading}>
          <h2 className={styles.name}>{employee.name}</h2>
          <RoleBadge role={employee.role} />
          <AcrchiveBadge isArchive={employee.isArchive} />
        </div>
        <EmployeeDetails employee={employee} />
      </div>
      <RoleAnimation role={employee.role} width={100} speed={0.5} />
    </li>
  )
}
