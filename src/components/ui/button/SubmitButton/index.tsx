import { FC } from "react";
import styles from "./styles.module.scss";

type Props = {
  title: string;
  disabled?: boolean;
};

export const SubmitButton: FC<Props> = ({ title, disabled = false }) => {
  return (
    <button
      disabled={disabled}
      className={styles.button}
      type="submit"
    >
      {title}
    </button>
  );
}
