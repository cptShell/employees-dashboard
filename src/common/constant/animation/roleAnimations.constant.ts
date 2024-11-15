import { EmployeeRole } from "@/common/enum";
import cookAnimationData from "@/asset/animations/cook.json";
import driverAnimationData from "@/asset/animations/driver.json";
import waiterAnimationData from "@/asset/animations/waiter.json";

export const ROLE_ANIMATIONS = {
  [EmployeeRole.COOK]: cookAnimationData,
  [EmployeeRole.DRIVER]: driverAnimationData,
  [EmployeeRole.WAITER]: waiterAnimationData,
};
