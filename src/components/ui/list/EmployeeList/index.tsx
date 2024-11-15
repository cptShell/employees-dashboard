import { ListLayout } from "@/components/layout";
import { useGetEmployeesQuery } from "@/store/api/employees.api";
import { useAppSelector } from "@/store/store";
import { EmployeeListItem } from "./EmployeeListItem";
import { CoverLoader, EmployeesLoader } from "../../loader";
import { motion } from "framer-motion";

export const EmployeeList = () => {
  const params = useAppSelector((state) => ({
    sort: state.sort.sort,
    filter: state.filter.filter,
  }));
  const {
    data: employees,
    isLoading,
    isFetching,
  } = useGetEmployeesQuery(params);

  if (isLoading) return <EmployeesLoader />;

  return employees && (
    <motion.div
      variants={{ appear: { opacity: 1 } }}
      initial={{ opacity: 0 }}
      animate="appear"
    >
      <ListLayout>
        {employees.map(employee => (
          <EmployeeListItem employee={employee} />
        ))}
        {isFetching && <CoverLoader />}
      </ListLayout>
    </motion.div>
  )
}
