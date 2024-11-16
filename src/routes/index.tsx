import { Route, createRoutesFromElements, redirect } from "react-router-dom";
import { CreateEmployeePage, EmployeesPage } from "@/components/page";
import { AppLayout } from "@/components/layout";
import { RoutePath } from "@/common/enum";
import { EditEmployeePage } from "@/components/page/editEmployee";
import { ErrorBoundary } from "@/components/boundary";

export const routes = createRoutesFromElements(
  <Route element={<AppLayout />}>
    <Route
      index
      path={RoutePath.INDEX}
      element={<EmployeesPage />}
    />
    <Route
      path={`${RoutePath.EMPLOYEES}/create`}
      element={<CreateEmployeePage />}
      ErrorBoundary={ErrorBoundary}
    />
    <Route
      path={`${RoutePath.EMPLOYEES}/:id`}
      element={<EditEmployeePage />}
      ErrorBoundary={ErrorBoundary}
    />
    <Route path="*" loader={() => redirect(RoutePath.INDEX)} />
  </Route>
)
