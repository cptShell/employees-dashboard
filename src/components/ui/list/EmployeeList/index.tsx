import { useGetEmployeesQuery } from "@/store/api/employees.api";
import { useAppSelector } from "@/store/store";

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

  return (
    <ul>
      {employees && (
        employees.map(employee => (
          <li>{employee.name} {employee.birthday} {employee.role}</li>
        ))
      )}
    </ul>
  );
}
