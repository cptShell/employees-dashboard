import { FC } from "react";
import styles from "./style.module.scss";

type Props = {
  isArchive: boolean;
}

export const AcrchiveBadge: FC<Props> = ({ isArchive }) => {
  return isArchive && <p className={styles.archive}>в архиве</p>;
}
