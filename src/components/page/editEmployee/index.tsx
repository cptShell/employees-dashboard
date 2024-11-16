import { EmployeeFormMode } from "@/common/enum";
import { EmployeePageParams } from "@/common/type";
import { EmployeeForm } from "@/components/feature";
import { FormLayout, PageLayout } from "@/components/layout";
import { EmployeePageHeading } from "@/components/ui/heading";
import { EmployeesLoader } from "@/components/ui/loader";
import { NoEmployeePlaceholder } from "@/components/ui/placeholder";
import { useGetEmployeeQuery } from "@/store/api/employees.api";
import { AnimatePresence, motion } from "framer-motion";
import { useParams } from "react-router-dom";

export const EditEmployeePage = () => {
  const params = useParams<EmployeePageParams>();
  const id = Number(params.id);

  if (typeof id !== "number" || isNaN(id)) {
    throw new Error("Невозможный идентификатор пользователя");
  }

  const { data: employee, isLoading, isSuccess } = useGetEmployeeQuery(id);

  if (isLoading) {
    return <EmployeesLoader />;
  }

  if (!isSuccess || !employee) {
    return (
      <NoEmployeePlaceholder
        reason={`Сотрудник с идентификатором '${id}' не найден`}
      />
    )
  }

  return (
    <PageLayout>
      <EmployeePageHeading mode={EmployeeFormMode.EDIT} />
      <AnimatePresence>
        {isSuccess && employee !== null && (
          <motion.div
            variants={{ appear: { opacity: 1 } }}
            initial={{ opacity: 0 }}
            animate="appear"
          >
            <FormLayout>
              <EmployeeForm employee={employee} />
            </FormLayout>
          </motion.div>
        )}
      </AnimatePresence>
    </PageLayout>
  );
}
