import { FC, PropsWithChildren } from "react";
import styles from "./styles.module.scss";

type Props = PropsWithChildren;

export const FormLayout: FC<Props> = ({ children }) => {
  return (
    <div className={styles.layout}>
      {children}
    </div>
  );
}
