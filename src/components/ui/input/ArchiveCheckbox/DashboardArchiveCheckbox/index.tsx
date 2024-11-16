import { useAppDispatch, useAppSelector } from "@/store/store";
import { setFilterByStatus } from "@/store/slice/filter.slice";
import { AcrchiveCheckbox } from "..";

export const DashboardAcrchiveCheckbox = () => {
  const { filter } = useAppSelector(state => state.filter);
  const dispatch = useAppDispatch();
  const { isArchive } = filter;

  return (
    <AcrchiveCheckbox
      value={isArchive}
      onToggle={() => dispatch(setFilterByStatus(!isArchive))}
    />
  );
}
