import { IMaskInput, IMaskInputProps } from "react-imask";
import styles from "../styles.module.scss";
import { FC } from "react";
import clsx from "clsx";

type Props = {
  error?: boolean;
} & IMaskInputProps<HTMLInputElement>;

export const MaskedInputBase: FC<Props> = ({ error, ...props }) => {
  return (
    <IMaskInput
      {...props}
      className={clsx(
        props.className,
        styles.input,
        error && styles.error
      )}
    />
  );
}
