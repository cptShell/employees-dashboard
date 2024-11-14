import { EmployeesPage } from "@/components/pages";
import { RoutePath } from "@/common/enum";

export const routes = [
  {
    path: RoutePath.INDEX,
    Component: EmployeesPage,
    // loader: UserLoader,
    errorElement: <div>ERROR</div>,
  },
];