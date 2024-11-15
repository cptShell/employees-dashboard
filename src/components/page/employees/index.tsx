import { EmployeeList } from "@/components/ui/list";
import { EmployeesPageHeading } from "@/components/ui/heading";
import { PageLayout } from "@/components/layout";
import { EmployeesControls } from "@/components/feature/EmployeesControls";

export const EmployeesPage = () => {
  return (
    <PageLayout>
      <EmployeesPageHeading />
      <EmployeesControls />
      <EmployeeList />
    </PageLayout>
  );
}
