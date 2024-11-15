import { MainLoadingAnimation } from "../../animation";
import styles from "./styels.module.scss";

export const EmployeesLoader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loader}>
        <MainLoadingAnimation />
      </div>
    </div>
  );
}
