import clsx from "clsx";
import { motion } from "framer-motion";
import { CheckIcon } from "../../icon";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { setFilterByStatus } from "@/store/slice/filter.slice";
import styles from "./styles.module.scss";

export const AcrchiveCheckbox = () => {
  const { filter } = useAppSelector(state => state.filter);
  const dispatch = useAppDispatch();
  const { isArchive } = filter;

  return (
    <label className={styles.container}>
      <p>в архиве</p>
      <input
        className={styles.hidden}
        type="checkbox"
        checked={isArchive}
        onClick={() => dispatch(setFilterByStatus(!isArchive))}
      />
      <div className={clsx(styles.custom, isArchive && styles.active)}>
        <motion.div
          variants={{
            checked: { opacity: 1, scale: 1 },
            unchecked: { opacity: 0, scale: 0.7 },
          }}
          animate={isArchive ? "checked" : "unchecked"}
          className={styles.motion}
        >
          <CheckIcon width={16} />
        </motion.div>
      </div>
    </label>
  )
}
