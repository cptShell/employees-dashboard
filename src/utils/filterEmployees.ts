import { Employee, EmployeeFilter } from "@/common/type";

export const filterEmployees = (
  filter: EmployeeFilter,
  employees: Array<Employee>,
) => {
  if (!employees.length) return employees;

  return employees.filter(({ isArchive, role }) => {
    const isAcceptRole = !filter.role || role === filter.role;
    const isAcceptArchive = filter.isArchive === undefined || filter.isArchive === isArchive;

    return isAcceptRole && isAcceptArchive;
  });
}
