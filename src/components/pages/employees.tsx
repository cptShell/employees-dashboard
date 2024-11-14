import { SortValue } from "@/common/enum";
import { setSortOrder } from "@/store/slice/sortSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";

export const EmployeesPage = () => {
  const { sort } = useAppSelector((state) => state.sort);
  const dispatch = useAppDispatch();

  const nextSortValue = sort.value === SortValue.ASC
    ? SortValue.DESC
    : SortValue.ASC;

  return (
    <div>
      <h1>EMPLOYEES</h1>
      <button
        onClick={() => dispatch(setSortOrder(nextSortValue))}
      >{sort.value}</button>
    </div>
  )
}
