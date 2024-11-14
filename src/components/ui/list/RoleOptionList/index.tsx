import { FC } from "react";
import clsx from "clsx";
import { useAppSelector } from "@/store/store"
import { ROLE_OPTIONS } from "@/common/constant";
import { EmployeeRole } from "@/common/enum";
import { Nullable } from "@/common/type";

type Props = {
  onSelect: (value: Nullable<EmployeeRole>) => void;
}

export const RoleOptionList: FC<Props> = ({ onSelect }) => {
  const { filter } = useAppSelector(state => state.filter);

  return (
    <ul>
      {ROLE_OPTIONS.map(({ label, value }) => {
        return (
          <li
            className={clsx(value === filter.role && "active")}
            onClick={() => onSelect(value)}
          >
            {label}
          </li>
        );
      })}
    </ul>
  );
}
