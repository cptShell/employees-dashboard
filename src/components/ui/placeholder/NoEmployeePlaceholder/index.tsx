import { FC } from "react";
import Lottie from "lottie-react";
import cookAnimationData from "@/asset/animations/no-content.json";
import styles from "./styles.module.scss";

type Props = {
  reason: string; 
}

export const NoEmployeePlaceholder: FC<Props> = ({ reason }) => {
  return (
    <div className={styles.container}>
      <Lottie animationData={cookAnimationData} width={120} />
      <h1 className={styles.title}>{reason}</h1>
    </div>
  );
}
