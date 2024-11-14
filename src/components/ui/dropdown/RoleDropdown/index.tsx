import { FC, useState } from "react";
import clsx from "clsx";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { setFilterByRole } from "@/store/slice/filter.slice";
import { EmployeeRole } from "@/common/enum"
import { Nullable, RoleOption } from "@/common/type";
import { RoleOptionList } from "../../list";
import { ROLE_OPTIONS } from "@/common/constant";

type Props = {
  options: Array<RoleOption>,
};

export const RoleDropdown: FC<Props> = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { filter } = useAppSelector(state => state.filter);
  const dispatch = useAppDispatch();

  const handleSelect = (value: Nullable<EmployeeRole>) => {
    dispatch(setFilterByRole(value));
  }

  const handleOpen = () => {
    if (!isOpen) setIsOpen(true);
  }

  const targetLabel = options.find(({ value }) => value === filter.role);

  console.log(targetLabel);

  return (
    <div onClick={handleOpen}>
      <button>{targetLabel?.label || ROLE_OPTIONS[0].label}</button>
      {isOpen && <RoleOptionList onSelect={handleSelect} />}
    </div>
  );
}
