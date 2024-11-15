import { FC } from "react";
import { useAppDispatch } from "@/store/store";
import { resetFilters } from "@/store/slice/filter.slice";
import styles from "./styles.module.scss";
import { CrossIcon } from "../../icon";

export const ResetButton: FC = () => {
  const dispatch = useAppDispatch();

  return (
    <button className={styles.reset} onClick={() => dispatch(resetFilters())}>
      Сбросить
      <CrossIcon width={16} />
    </button>
  );
}
