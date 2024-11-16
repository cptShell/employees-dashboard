import { FC, PropsWithChildren } from "react";
import styles from "./styles.module.scss";
import { AnimatePresence } from "framer-motion";

type Props = PropsWithChildren;

export const PageLayout: FC<Props> = ({ children }) => {
  return (
    <AnimatePresence>
      <div className={styles.layout}>{children}</div>
    </AnimatePresence>
  );
}
