import { FC } from "react";
import clsx from "clsx";
import { ListLayout } from "@/components/layout";
import { EmployeeRole } from "@/common/enum";
import { Nullable, RoleOption } from "@/common/type";
import styles from "./styles.module.scss";

type Props = {
  options: Array<RoleOption>;
  target: Nullable<RoleOption>;
  onSelect: (value: Nullable<EmployeeRole>) => void;
  onClose: () => void;
}

export const RoleOptionList: FC<Props> = ({
  onSelect,
  onClose,
  options,
  target,
}) => {
  const handleSelect = (value: Nullable<EmployeeRole>) => {
    onSelect(value);
    onClose();
  }

  return (
    <ListLayout>
      {options.map(({ value, label }) => {
        return (
          <li
            key={String(value)}
            className={clsx(styles.item, value === target?.value && styles.active)}
            onClick={() => handleSelect(value)}
            aria-hidden="true"
          >
            {label}
          </li>
        );
      })}
    </ListLayout>
  );
}
