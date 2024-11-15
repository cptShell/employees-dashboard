import { FC } from "react";

type Props = {
  width?: number;
  height?: number;
}

export const ArrowIcon: FC<Props> = ({ width = 24, height = width }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      fill="currentColor"
      width={width}
      height={height}
    >
      <path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/>
    </svg>
  )
}
