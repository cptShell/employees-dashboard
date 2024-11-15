import { FC } from "react";
import { useLottie } from "lottie-react";
import { EmployeeRole } from "@/common/enum";
import { ROLE_ANIMATIONS } from "@/common/constant";
import styles from "./styles.module.scss";
import clsx from "clsx";

type Props = {
  role: EmployeeRole;
  width?: number;
  height?: number;
  speed: number;
}

export const RoleAnimation: FC<Props> = ({
  role,
  width = 50,
  height = width,
  speed = 1,
}) => {
  const options = {
    animationData: ROLE_ANIMATIONS[role],
    loop: true,
    speed,
  };

  const { View } = useLottie(options);

  const isCook = EmployeeRole.COOK === role;

  return (
    <div
      className={clsx(styles.container, isCook && styles.upscaled)}
      style={{ width, height }}
    >
      {View}
    </div>
  );
}
