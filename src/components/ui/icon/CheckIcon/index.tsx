import { FC } from "react";

type Props = {
  width?: number;
  height?: number;
}

export const CheckIcon: FC<Props> = ({ width = 24, height = width }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      viewBox="0 -960 960 960"
      width={width}
      fill="currentColor"
    >
      <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/>
    </svg>
  );
}
