import clsx from "clsx";
import { motion } from "framer-motion";
import { CheckIcon } from "../../icon";
import { FC } from "react";
import styles from "./styles.module.scss";

type Props = {
  value?: boolean;
  onToggle: () => void;
}

export const AcrchiveCheckbox: FC<Props> = ({ value, onToggle }) => {
  return (
    <label className={styles.container}>
      <p>в архиве</p>
      <input
        className={styles.hidden}
        type="checkbox"
        checked={value}
        onChange={onToggle}
      />
      <div className={clsx(styles.custom, value && styles.active)}>
        <motion.div
          variants={{
            checked: { opacity: 1, scale: 1 },
            unchecked: { opacity: 0, scale: 0.7 },
          }}
          animate={value ? "checked" : "unchecked"}
          className={styles.motion}
        >
          <CheckIcon width={16} />
        </motion.div>
      </div>
    </label>
  )
}

export * from "./DashboardArchiveCheckbox";
