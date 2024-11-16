import { FC } from 'react';
import { Control, Controller, Path } from 'react-hook-form';
import { EmployeeDto } from '@/common/type';
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

export const NameField: FC<Props> = ({
  control,
  name,
  errorMessage,
  placeholder,
  title,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value } }) => (
        <InputControl title={title} error={!!errorMessage}>
          <InputBase
            error={!!errorMessage}
            setup={{
              type: "default",
              props: {
                placeholder,
                value: value as string,
                onChange,
                onBlur,
              }
            }}
          />
          {errorMessage && <InputErrorMessage message={errorMessage} />}
        </InputControl>
      )}
    />
  );
};
