import { FC } from "react";

type Props = {
  width?: number;
  height?: number;
}

export const CrossIcon: FC<Props> = ({ width = 24, height = width }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      fill="currentColor"
      width={width}
      height={height}
    >
      <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
    </svg>
  )
}