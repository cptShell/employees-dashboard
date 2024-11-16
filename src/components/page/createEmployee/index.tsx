import { EmployeeFormMode } from "@/common/enum";
import { EmployeeForm } from "@/components/feature";
import { FormLayout, PageLayout } from "@/components/layout";
import { EmployeePageHeading } from "@/components/ui/heading";
import { motion } from "framer-motion";

export const CreateEmployeePage = () => {
  return (
    <motion.div
      variants={{ appear: { opacity: 1 } }}
      initial={{ opacity: 0 }}
      animate="appear"
    >
      <PageLayout>
        <EmployeePageHeading mode={EmployeeFormMode.CREATE} />
        <FormLayout>
          <EmployeeForm employee={undefined} />
        </FormLayout>
      </PageLayout>
    </motion.div>
  );
}
