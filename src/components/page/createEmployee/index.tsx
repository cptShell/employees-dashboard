import { EmployeeFormMode } from "@/common/enum";
import { EmployeeForm } from "@/components/feature";
import { FormLayout, PageLayout } from "@/components/layout";
import { EmployeePageHeading } from "@/components/ui/heading";

export const CreateEmployeePage = () => {
  return (
    <PageLayout>
      <EmployeePageHeading mode={EmployeeFormMode.CREATE} />
      <FormLayout>
        <EmployeeForm employee={undefined} />
      </FormLayout>
    </PageLayout>
  );
}
