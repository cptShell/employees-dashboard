import { FC } from "react";
import { useForm } from "react-hook-form";
import RoleField from "./RoleField";
import { PaperLayout } from "@/components/layout";
import { EmployeeValidationSchema } from "@/schemas";
import { joiResolver } from '@hookform/resolvers/joi';
import { Employee, EmployeeDto, Nullable } from "@/common/type";
import {
  AcrchiveCheckbox,
  NameField,
  BirthdayField,
  PhoneNumberField,
} from "@/components/ui/input";
import { SubmitButton } from "@/components/ui/button";
import {
  useCreateEmployeeMutation,
  useEditEmployeeMutation,
} from "@/store/api/employees.api";
import { CoverLoader } from "@/components/ui/loader";
import { useNavigate } from "react-router-dom";
import { EmployeeRole, RoutePath } from "@/common/enum";
import style from "./styles.module.scss";

type Props = {
  employee: Nullable<Employee>;
}

const toDto = (employee: Employee): EmployeeDto => {
  const { isArchive, name, phone, birthday, role } = employee;

  return { isArchive, name, phone, birthday, role };
}

export const EmployeeForm: FC<Props> = ({ employee }) => {
  const [editUser, { isLoading: isUpdating }] = useEditEmployeeMutation();
  const [createUser, { isLoading: isCreating }] = useCreateEmployeeMutation();
  const {
    control,
    formState,
    handleSubmit,
    watch,
    setValue,
  } = useForm<EmployeeDto>({
    resolver: joiResolver(EmployeeValidationSchema),
    defaultValues: employee
      ? toDto(employee)
      : { isArchive: false, role: EmployeeRole.COOK },
  });
  const navigate = useNavigate();
  const { errors } = formState;
  const [role, isArchive] = watch(["role", "isArchive"]);
  const isLoading = isCreating || isUpdating;


  const onSubmit = async (payload: EmployeeDto) => {
    const { data } = employee
      ? await editUser({ id: employee.id, payload })
      : await createUser(payload);

    if (!!data) navigate(RoutePath.INDEX);
  }

  return (
    <div className={style.container}>
      <PaperLayout>
        <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
          <NameField
            name="name"
            control={control}
            placeholder="Введите имя"
            title="Имя"
            errorMessage={errors.name?.message}
          />
          <RoleField
            title="Выберите профессию"
            onSelect={(value) => value && setValue("role", value)}
            value={role}
          />
          <PhoneNumberField
            name="phone"
            control={control}
            placeholder="введите номер телефона"
            title="номер телефона"
            errorMessage={errors.phone?.message}
          />
          <BirthdayField
            name="birthday"
            control={control}
            placeholder="введите дату рождения"
            title="дата рождения"
            errorMessage={errors.birthday?.message}
          />
          <AcrchiveCheckbox
            onToggle={() => setValue("isArchive", !isArchive)}
            value={isArchive}
          />
          <SubmitButton
            disabled={!!Object.values(errors).length}
            title="СОХРАНИТЬ ИЗМЕНЕНИЯ"
          />
        </form>
        {isLoading && <CoverLoader />}
      </PaperLayout>
    </div>
  );
}
