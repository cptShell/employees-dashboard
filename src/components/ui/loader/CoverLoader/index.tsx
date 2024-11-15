import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

const effectWidth = 100;
const blinkOffset = 20;

export const CoverLoader = () => {
  const [screenWidth, setScreenWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    setScreenWidth(document.body.offsetWidth);
  }, []);

  if (!screenWidth) return null;

  const blinkAnimation: Variants = {
    hidden: { opacity: 0, x: -screenWidth },
    visible: {
      opacity: 0.5,
      x: screenWidth + effectWidth,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.effect} />
    </div>
  );
};
