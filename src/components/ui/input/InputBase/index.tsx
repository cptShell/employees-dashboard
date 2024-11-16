import clsx from "clsx";
import { FC, InputHTMLAttributes } from "react";
import styles from "./styles.module.scss";
import { IMaskInput, IMaskInputProps } from "react-imask";

type Props = {
  error?: boolean;
  setup: {
    type: "default",
    props: InputHTMLAttributes<HTMLInputElement>,
  } | {
    type: "mask",
    props: IMaskInputProps<HTMLInputElement>,
  }
};

export const InputBase: FC<Props> = ({ error, setup }) => {
  const { props, type } = setup;

  const className = clsx(
    props.className,
    styles.input,
    error && styles.error
  );

  if (type === "mask") {
    return <IMaskInput {...props} className={className} />
  }

  if (type === "default") {
    return <input {...props} className={className} />
  }
  return null;
}
