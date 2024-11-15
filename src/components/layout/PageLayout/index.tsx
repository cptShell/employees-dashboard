import { FC, PropsWithChildren } from "react";
import styles from "./styles.module.scss";

type Props = PropsWithChildren;

export const PageLayout: FC<Props> = ({ children }) => {
  return <div className={styles.layout}>{children}</div>;
}
