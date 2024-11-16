import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

export const CoverLoader = () => {
  const [screenWidth, setScreenWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    setScreenWidth(document.body.offsetWidth);
  }, []);

  if (!screenWidth) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.effect} />
    </div>
  );
};
