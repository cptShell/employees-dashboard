import { FC, PropsWithChildren } from "react";
import styles from "./styles.module.scss";

type Props = PropsWithChildren;

export const ListLayout: FC<Props> = ({ children }) => {
  return (
    <ul className={styles.list}>
      {children}
    </ul>
  );
}
