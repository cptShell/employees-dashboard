import { FC, PropsWithChildren } from "react";
import { LabelText } from "@/components/ui/shared";
import styles from "./style.module.scss";
import clsx from "clsx";
import React from "react";

type Props = {
  native?: boolean;
  title: string;
  error?: boolean;
} & PropsWithChildren;

export const InputControl: FC<Props> = ({
  title,
  children,
  error = false,
  native = true,
}) => {
  return React.createElement(
    native ? "label" : "div",
    { className: clsx(styles.container, error && styles.error) },
    <>
      <div className={styles.label}>
        <LabelText title={title} />
        {error && <span className={styles.error}>*</span>}
      </div>
      {children}
    </>
  );
}
