import { FC } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import styles from "./styles.module.scss";

export const AppLayout: FC = () => {
  return (
    <>
      <div className={styles["app-wrapper"]}>
        <div className={styles["app-container"]}>
          <Outlet />
        </div>
      </div>
      <ScrollRestoration />
    </>
  );
};
