import { FC, forwardRef } from 'react';
import { Control, Controller, Path } from 'react-hook-form';
import { EmployeeDto } from '@/common/type';
import { PHONE_NUMBER_MASK } from '@/common/constant';
import { InputControl } from '@/components/ui/input';
import { InputErrorMessage } from '@/components/ui/input';
import { InputBase } from '../InputBase';
import React from 'react';

type Props = {
  control: Control<EmployeeDto>;
  name: Path<EmployeeDto>;
  errorMessage?: string;
  title: string;
  placeholder: string;
};

export const PhoneNumberField: FC<Props> = forwardRef(({
  control,
  name,
  errorMessage,
  placeholder,
  title,
}: Props, ref: React.ForwardedRef<HTMLInputElement>) => {

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value } }) => {
        const props = {
          ref,
          mask: PHONE_NUMBER_MASK,
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
