import { SortValue } from "@/common/enum";
import { useGetEmployeesQuery } from "@/store/api/employees.api";
import { setSortOrder } from "@/store/slice/sort.slice";
import { useAppDispatch, useAppSelector } from "@/store/store";

export const EmployeesPage = () => {
  const params = useAppSelector((state) => ({
    sort: state.sort.sort,
    filter: state.filter.filter,
  }));
  const dispatch = useAppDispatch();
  const { data, isLoading } = useGetEmployeesQuery(params);
  console.log(data, isLoading);

  const nextSortValue = params.sort.value === SortValue.ASC
    ? SortValue.DESC
    : SortValue.ASC;

  return (
    <div>
      <h1>EMPLOYEES</h1>
      <button
        onClick={() => dispatch(setSortOrder(nextSortValue))}
      >{params.sort.value}</button>
    </div>
  )
}
