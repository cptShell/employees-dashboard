import { EmployeeFilter, EmployeeSort } from "@/components/ui/input";
import styles from "./style.module.scss";

export const EmployeesControls = () => {
  return (
    <div className={styles.container}>
      <EmployeeSort />
      <EmployeeFilter />
    </div>
  );
}
