import { resetFilters, setFilterByStatus } from "@/store/slice/filter.slice";
import { useAppDispatch, useAppSelector } from "@/store/store";

export const AcrchiveCheckbox = () => {
  const { filter } = useAppSelector(state => state.filter);
  const dispatch = useAppDispatch();

  return (
    <label>
      <p>в архиве</p>
      <input
        type="checkbox"
        checked={filter.isArchive}
        onClick={() => dispatch(setFilterByStatus(!filter.isArchive))}
      />
      <button onClick={() => dispatch(resetFilters())}>сбросить</button>
    </label>
  )
}
