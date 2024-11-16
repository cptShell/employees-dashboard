import { FC } from "react";
import styles from "./styles.module.scss";

export type Props = {
  title?: string;
}

export const LabelText: FC<Props> = ({ title }) => {
  return (
    <p className={styles.label}>{title}</p>
  )
}
