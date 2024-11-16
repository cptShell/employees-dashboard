import { EMPLOYEE_FORM_MODE_TITLE } from "@/common/constant";
import { EmployeeFormMode } from "@/common/enum";
import { HeadingLayout } from "@/components/layout";
import { FC } from "react";

type Props = { mode?: EmployeeFormMode };

export const EmployeePageHeading: FC<Props> = ({
  mode = EmployeeFormMode.CREATE,
}) => {
  return (
    <HeadingLayout>
      <h1>{EMPLOYEE_FORM_MODE_TITLE[mode]}</h1>
    </HeadingLayout>
  );
}
