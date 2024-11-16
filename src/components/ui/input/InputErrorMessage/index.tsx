import { FC } from "react";
import styles from "./styles.module.scss";

type Props = {
  message: string;
}

export const InputErrorMessage: FC<Props> = ({ message }) => {
  return (
    <span className={styles.error}>
      {message}
    </span>
  );
}
