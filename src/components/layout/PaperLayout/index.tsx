import { FC, PropsWithChildren } from "react";
import styles from "./styles.module.scss";

type Props = { title?: string } & PropsWithChildren;

export const PaperLayout: FC<Props> = ({ children, title }) => {
  return (
    <div className={styles.layout}>
      {title && <p className={styles.label}>{title}</p>}
      {children}
    </div>
  );
}
