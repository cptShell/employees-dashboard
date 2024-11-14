import { FC, PropsWithChildren } from "react";
import styles from "./styles.module.scss";
import { Outlet, ScrollRestoration } from "react-router-dom";

type Props = PropsWithChildren;

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
  )
};
