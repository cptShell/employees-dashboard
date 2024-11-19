import { FC, memo, useId } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import { SortName, SortValue } from "@/common/enum";
import { ArrowIcon } from "../../icon";
import styles from "./styles.module.scss";

type Props = {
  isActive: boolean;
  title: string;
  onClick: (key: SortName) => void;
  sortKey: SortName;
  value: SortValue;
}

export const EmployeeSortButton: FC<Props> = memo(({
  isActive,
  title,
  sortKey,
  onClick,
  value,
}) => {
  const id = useId();

  const activeChecked = value === SortValue.DESC ? "rotated" : "initial";

  return (
    <label
      htmlFor={id}
      className={clsx(isActive && styles.active, styles.container)}
    >
      <p>{title}</p>
      <input
        id={id}
        className={styles.checkbox}
        type="checkbox"
        checked={value === SortValue.ASC}
        onChange={() => onClick(sortKey)}
      />
      <motion.div
        initial={{ rotate: 0 }}
        variants={{ rotated: { rotate: 180 } }}
        animate={isActive ? activeChecked : "initial"}
        className={styles.motion}
      >
        <ArrowIcon />
      </motion.div>
    </label>
  ) 
});
