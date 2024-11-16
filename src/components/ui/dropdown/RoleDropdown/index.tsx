import { FC, useState } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import { MenuIcon } from "../../icon";
import { RoleOptionList } from "../../list";
import { useOutsideClick } from "@/hooks";
import { EmployeeRole } from "@/common/enum";
import { Nullable, RoleOption } from "@/common/type";
import styles from "./styles.module.scss";

type Props = {
  options: Array<RoleOption>;
  value: Nullable<EmployeeRole>;
  onSelect: (value: Nullable<EmployeeRole>) => void;
};

export const RoleDropdown: FC<Props> = ({ options, value, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useOutsideClick<HTMLDivElement>(() => setIsOpen(false));

  const handleOpen = () => {
    if (!isOpen) setIsOpen(true);
  }

  const targetLabel = options.find((option) => option.value === value);

  return (
    <div className={styles.container} onClick={handleOpen}>
      <button onClick={(e) => e.preventDefault()} className={clsx(styles.button, isOpen && styles.blocked)}>
        {targetLabel?.label || options[0].label}
        <MenuIcon width={16} />
      </button>
      <motion.div
        ref={ref}
        className={styles.options}
        animate={isOpen ? "opened" : "closed"}
        variants={{
          closed: { opacity: 0, top: 15, scale: 0.85, pointerEvents: "none" },
          opened: { opacity: 1, top: 30, scale: 1 },
        }}
      >
        <RoleOptionList
          target={targetLabel}
          options={options}
          onSelect={onSelect}
          onClose={() => setIsOpen(false)}
        />
      </motion.div>
    </div>
  );
}
