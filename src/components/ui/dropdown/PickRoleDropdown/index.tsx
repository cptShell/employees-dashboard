import { ROLE_OPTIONS } from "@/common/constant";
import { EmployeeRole } from "@/common/enum";
import { Nullable } from "@/common/type";
import { setFilterByRole } from "@/store/slice/filter.slice";
import { useAppSelector, useAppDispatch } from "@/store/store";
import { RoleDropdown } from "..";

export const DashboardRoleDropdown = () => {
  const { filter } = useAppSelector(state => state.filter);
  const dispatch = useAppDispatch();

  const handleSelect = (value: Nullable<EmployeeRole>) => {
    dispatch(setFilterByRole(value));
  }

  return (
    <RoleDropdown
      options={ROLE_OPTIONS}
      value={filter.role}
      onSelect={handleSelect}
    />
  );
}
