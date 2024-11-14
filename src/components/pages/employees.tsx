import { deleteEmployee, editEmployee, getEmployees } from "@/common/api";
import { createEmployee } from "@/common/api";
import { EmployeeRole, SortValue } from "@/common/enum";
import { setSortOrder } from "@/store/slice/sort.slice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useEffect } from "react";

export const EmployeesPage = () => {
  const { sort } = useAppSelector((state) => state.sort);
  const dispatch = useAppDispatch();

  const nextSortValue = sort.value === SortValue.ASC
    ? SortValue.DESC
    : SortValue.ASC;

  useEffect(() => {
    const get = async () => {
      const a = await getEmployees();
      console.log(a, "get initial");
    }
    get();
  }, []);

  return (
    <div>
      <h1>EMPLOYEES</h1>
      <button
        onClick={() => dispatch(setSortOrder(nextSortValue))}
      >{sort.value}</button>
    </div>
  )
}
