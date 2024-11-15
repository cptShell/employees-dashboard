import { FC, memo, useId } from "react";
import clsx from "clsx";
import { SortName, SortValue } from "@/common/enum";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";
import { ArrowIcon } from "../../icon";

type Props = {
  isActive: boolean;
  title: string;
  onClick: (key: SortName) => void;
  key: SortName;
  value: SortValue;
}

export const EmployeeSortButton: FC<Props> = memo(({
  isActive,
  title,
  key,
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
        onChange={() => onClick(key)}
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
