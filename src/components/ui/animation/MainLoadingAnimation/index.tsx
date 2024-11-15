import { FC } from "react";
import { useLottie } from "lottie-react";
import pizzaLoader from "@/asset/animations/loader.json";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";

export const MainLoadingAnimation: FC = () => {
  const options = {
    animationData: pizzaLoader,
    loop: true,
  };

  const { View } = useLottie(options);

  return (
    <motion.div
      initial={{ scale: 0 }}
      variants={{
        scaleUp: {
          scale: 1,
        }
      }}
      animate="scaleUp"
      transition={{ type: "spring", stiffness: 400 }}
      className={styles.container}
    >
      {View}
    </motion.div>
  );
}
