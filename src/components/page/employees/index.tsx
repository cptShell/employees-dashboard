import { SortName, SortValue } from "@/common/enum";
import { setSortBy } from "@/store/slice/sort.slice";
import { useAppDispatch, useAppSelector } from "@/store/store";

import { RoleDropdown } from "@/components/ui/dropdown";
import { ROLE_OPTIONS } from "@/common/constant";

import { AcrchiveCheckbox } from "@/components/ui/input";
import { EmployeeList } from "@/components/ui/list";
import { EmployeesPageHeading } from "@/components/ui/heading";
import { EmployeeSortButton } from "@/components/ui/sort";

export const EmployeesPage = () => {
  const { sort } = useAppSelector((state) => state.sort);
  const dispatch = useAppDispatch();
  console.log(sort);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <EmployeesPageHeading />
      {/* <button
        onClick={() => dispatch(setSortOrder(nextSortValue))}
      >
        {params.sort.value}
      </button> */}
      <div style={{ display: "flex", gap: 8 }}>
        <EmployeeSortButton
          key={SortName.BIRTHDAY}
          value={SortName.BIRTHDAY === sort.key ? sort.value : SortValue.DESC}
          isActive={SortName.BIRTHDAY === sort.key}
          onClick={() => dispatch(setSortBy(SortName.BIRTHDAY))}
          title="дата рождения"
        />
        <EmployeeSortButton
          key={SortName.NAME}
          value={SortName.NAME === sort.key ? sort.value : SortValue.DESC}
          isActive={SortName.NAME === sort.key}
          onClick={() => dispatch(setSortBy(SortName.NAME))}
          title="имя"
        />
      </div>
      <RoleDropdown options={ROLE_OPTIONS} />
      <AcrchiveCheckbox />
      <EmployeeList />
    </div>
  )
}
