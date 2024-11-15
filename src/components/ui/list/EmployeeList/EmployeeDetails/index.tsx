import { FC } from "react";
import { Employee } from "@/common/type"
import styles from "./styles.module.scss";

type Props = {
  employee: Employee;
}

export const EmployeeDetails: FC<Props> = ({ employee }) => {
  const { phone, birthday } = employee;

  return (
    <div className={styles.container}>
      <p className={styles.phone}>
        Телефон - {phone}
      </p>
      <p className={styles.birthday}>
        Дата рождения - {birthday}
      </p>
    </div>
  )
}