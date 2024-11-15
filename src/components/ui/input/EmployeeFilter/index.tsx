import { ROLE_OPTIONS } from "@/common/constant";
import { AcrchiveCheckbox } from ".."
import { RoleDropdown } from "../../dropdown"
import { PaperLayout } from "@/components/layout/PaperLayout";
import styles from "./styles.module.scss";
import { ResetButton } from "../../button";
import { motion } from "framer-motion";
import { useAppSelector } from "@/store/store";

export const EmployeeFilter = () => {
  const { filter } = useAppSelector(state => state.filter);

  return (
    <PaperLayout title="Фильтр">
      <div className={styles.container}>
        <RoleDropdown options={ROLE_OPTIONS} />
        <AcrchiveCheckbox />
      </div>
      <motion.div
        initial={{ top: 16, right: 16, position: "absolute" }}
        variants={{
          hidden: { opacity: 0, pointerEvents: "none" },
          visible: { opacity: 1 },
        }}
        animate={filter.isArchive !== undefined ? "visible" : "hidden"}
      >
        <ResetButton />
      </motion.div>
    </PaperLayout>
  );
}
