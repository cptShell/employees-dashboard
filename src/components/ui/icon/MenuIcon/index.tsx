import { FC } from "react";

type Props = {
  width?: number;
  height?: number;
}

export const MenuIcon: FC<Props> = ({ width = 24, height = width }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      viewBox="0 -960 960 960"
      width={width}
      fill="currentColor"
    >
      <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
    </svg>
  )
}
