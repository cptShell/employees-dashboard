import { DATE_FORMAT } from "@/common/constant";
import { SortName, SortValue } from "@/common/enum";
import { Employee, EmployeeSort } from "@/common/type";
import { isBefore, parse } from "date-fns";

export const sortEmployees = (
  sort: EmployeeSort,
  employees: Array<Employee>,
) => {
  return employees.sort((employeeA, employeeB) => {
    const compareTuple: [Employee, Employee] = [employeeA, employeeB];

    if (sort.value === SortValue.ASC) compareTuple.reverse();

    if (sort.key === SortName.NAME) {
      return compareTuple[0].name.localeCompare(compareTuple[1].name);
    };
    if (sort.key === SortName.BIRTHDAY) {
      const employeeDateA = parse(compareTuple[0].birthday, DATE_FORMAT, new Date());
      const employeeDateB = parse(compareTuple[1].birthday, DATE_FORMAT, new Date());

      return isBefore(employeeDateA, employeeDateB) ? 1 : -1;
    }

    return 0;
  });
}
