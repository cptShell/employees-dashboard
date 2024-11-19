import { SortName, SortValue } from "@/common/enum"
import { EmployeeSortButton } from "../../sort"
import { PaperLayout } from "@/components/layout";
import { useAppDispatch, useAppSelector } from "@/store/store"
import { setSortBy } from "@/store/slice/sort.slice";
import styles from "./styles.module.scss";

export const EmployeeSort = () => {
  const { sort } = useAppSelector(state => state.sort);
  const dispatch = useAppDispatch();

  return (
    <PaperLayout title="Соритровка">
      <div className={styles.buttons}>
        <EmployeeSortButton
          sortKey={SortName.BIRTHDAY}
          value={SortName.BIRTHDAY === sort.key ? sort.value : SortValue.DESC}
          isActive={SortName.BIRTHDAY === sort.key}
          onClick={() => dispatch(setSortBy(SortName.BIRTHDAY))}
          title="дата рождения"
        />
        <EmployeeSortButton
          sortKey={SortName.NAME}
          value={SortName.NAME === sort.key ? sort.value : SortValue.DESC}
          isActive={SortName.NAME === sort.key}
          onClick={() => dispatch(setSortBy(SortName.NAME))}
          title="имя"
        />
      </div>
    </PaperLayout>
  )
}
