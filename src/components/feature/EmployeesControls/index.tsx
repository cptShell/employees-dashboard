import { EmployeeFilter, EmployeeSort } from "@/components/ui/input";
import { AddButton } from "@/components/ui/button";
import styles from "./style.module.scss";

export const EmployeesControls = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <EmployeeSort />
        <EmployeeFilter />
      </div>
      <AddButton />
    </div>
  );
}
