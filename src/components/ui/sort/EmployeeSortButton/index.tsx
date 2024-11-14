import { FC, memo } from "react";
import clsx from "clsx";
import { SortName, SortValue } from "@/common/enum";
import styles from "./styles.module.scss";

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
  return (
    <label className={clsx(isActive && styles.active)}>
      <p>{title}</p>
      <button onClick={() => onClick(key)}>{value}</button>
    </label>
  ) 
});
