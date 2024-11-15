import { FC } from "react";
import clsx from "clsx";
import { useAppSelector } from "@/store/store";
import { ListLayout } from "@/components/layout";
import { ROLE_OPTIONS } from "@/common/constant";
import { EmployeeRole } from "@/common/enum";
import { Nullable } from "@/common/type";
import styles from "./styles.module.scss";

type Props = {
  onSelect: (value: Nullable<EmployeeRole>) => void;
  onClose: () => void;
}

export const RoleOptionList: FC<Props> = ({ onSelect, onClose }) => {
  const { filter } = useAppSelector(state => state.filter);

  const handleSelect = (value: Nullable<EmployeeRole>) => {
    onSelect(value);
    onClose();
  }

  return (
    <ListLayout>
      {ROLE_OPTIONS.map(({ label, value }) => {
        return (
          <li
            className={clsx(styles.item, value === filter.role && styles.active)}
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
