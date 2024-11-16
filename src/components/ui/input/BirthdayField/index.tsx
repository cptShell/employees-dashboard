import { FC, forwardRef } from 'react';
import { Control, Controller, Path } from 'react-hook-form';
import { EmployeeDto } from '@/common/type';
import { BIRTHDAY_MASK } from '@/common/constant/form/Birthday.constant';
import { InputControl } from '@/components/ui/input';
import { InputErrorMessage } from '@/components/ui/input';
import { InputBase } from '../InputBase';

type Props = {
  control: Control<EmployeeDto>;
  name: Path<EmployeeDto>;
  errorMessage?: string;
  title: string;
  placeholder: string;
};

export const BirthdayField: FC<Props> = forwardRef(({
  control,
  name,
  errorMessage,
  placeholder,
  title,
}, ref) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value } }) => {
        const props = {
          ref,
          mask: BIRTHDAY_MASK,
          placeholder,
          value: value as string,
          onChange,
          onAccept: onChange,
          onBlur,
        };
        return (
          <InputControl title={title}>
            <InputBase
              error={!!errorMessage}
              setup={{ type: "mask", props }}
            />
            {errorMessage && <InputErrorMessage message={errorMessage} />}
          </InputControl>
        )
      }}
    />
  );
});
