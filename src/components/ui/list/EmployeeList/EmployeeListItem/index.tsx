import { FC } from "react";
import { RoleAnimation } from "@/components/ui/animation";
import { AcrchiveBadge, RoleBadge } from "@/components/ui/badge";
import { Employee } from "@/common/type"
import { EmployeeDetails } from "../EmployeeDetails";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import { RoutePath } from "@/common/enum";

type Props = {
  employee: Employee;
}

export const EmployeeListItem: FC<Props> = ({ employee }) => {
  const { id, name, role, isArchive } = employee;

  return (
    <li>
      <Link className={styles.item} to={`${RoutePath.EMPLOYEES}/${id}`}>
        <div className={styles.container}>
          <div className={styles.heading}>
            <h2 className={styles.name}>{name}</h2>
            <RoleBadge role={role} />
            <AcrchiveBadge isArchive={isArchive} />
          </div>
          <EmployeeDetails employee={employee} />
        </div>
        <RoleAnimation role={role} width={100} speed={0.5} />
      </Link>
    </li>
  )
}
