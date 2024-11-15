import { FC, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { setFilterByRole } from "@/store/slice/filter.slice";
import { MenuIcon } from "../../icon";
import { RoleOptionList } from "../../list";
import { useOutsideClick } from "@/hooks";
import { EmployeeRole } from "@/common/enum";
import { ROLE_OPTIONS } from "@/common/constant";
import { Nullable, RoleOption } from "@/common/type";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";
import clsx from "clsx";

type Props = {
  options: Array<RoleOption>,
};

export const RoleDropdown: FC<Props> = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { filter } = useAppSelector(state => state.filter);
  const dispatch = useAppDispatch();
  const ref = useOutsideClick<HTMLDivElement>(() => setIsOpen(false));

  const handleSelect = (value: Nullable<EmployeeRole>) => {
    dispatch(setFilterByRole(value));
  }

  const handleOpen = () => {
    if (!isOpen) setIsOpen(true);
  }

  const targetLabel = options.find(({ value }) => value === filter.role);

  return (
    <div className={styles.container} onClick={handleOpen}>
      <button className={clsx(styles.button, isOpen && styles.blocked)}>
        {targetLabel?.label || ROLE_OPTIONS[0].label}
        <MenuIcon width={16} />
      </button>
      <motion.div
        ref={ref}
        className={styles.options}
        onAnimationComplete={(def) => console.log(def)}
        animate={isOpen ? "opened" : "closed"}
        variants={{
          closed: { opacity: 0, top: 15, scale: 0.85 },
          opened: { opacity: 1, top: 30, scale: 1 },
        }}
      >
        <RoleOptionList
          onSelect={handleSelect}
          onClose={() => setIsOpen(false)}
        />
      </motion.div>
    </div>
  );
}
