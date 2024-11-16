import { motion } from "framer-motion";
import { DashboardAcrchiveCheckbox } from ".."
import { ResetButton } from "../../button";
import { DashboardRoleDropdown } from "../../dropdown/PickRoleDropdown";
import { useAppSelector } from "@/store/store";
import { PaperLayout } from "@/components/layout";
import styles from "./styles.module.scss";

export const EmployeeFilter = () => {
  const { filter } = useAppSelector(state => state.filter);

  return (
    <PaperLayout title="Фильтр">
      <div className={styles.container}>
        <DashboardRoleDropdown />
        <DashboardAcrchiveCheckbox />
      </div>
      <motion.div
        initial={{ top: 16, right: 16, position: "absolute" }}
        variants={{
          hidden: { opacity: 0, pointerEvents: "none" },
          visible: { opacity: 1 },
        }}
        style={{ opacity: 0 }}
        animate={filter.isArchive !== undefined ? "visible" : "hidden"}
      >
        <ResetButton />
      </motion.div>
    </PaperLayout>
  );
}
