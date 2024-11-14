import { Route, createRoutesFromElements } from "react-router-dom";
import { EmployeesPage } from "@/components/page";
import { AppLayout } from "@/components/layout/AppLayout";
import { RoutePath } from "@/common/enum";
import { EmployeePage } from "@/components/page/employee";

export const routes = createRoutesFromElements(
  <Route element={<AppLayout />}>
    <Route
      index
      path={RoutePath.INDEX}
      element={<EmployeesPage />}
    />
    <Route
      path={`${RoutePath.EMPLOYEES}/:id`}
      element={<EmployeePage />}
    />
  </Route>
)
