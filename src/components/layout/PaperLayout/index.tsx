import { FC, PropsWithChildren } from "react";
import { LabelText } from "@/components/ui/shared";
import styles from "./styles.module.scss";

type Props = { title?: string } & PropsWithChildren;

export const PaperLayout: FC<Props> = ({ children, title }) => {
  return (
    <div className={styles.layout}>
      {title && <LabelText title={title} />}
      {children}
    </div>
  );
}
