import { FC, PropsWithChildren } from "react";
import styles from "./styles.module.scss";

type Props = PropsWithChildren;

export const HeadingLayout: FC<Props> = ({ children }) => {
  return (
    <div className={styles.container}>{children}</div>
  );
}
