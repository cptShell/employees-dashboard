import { FC } from 'react';
import { Nullable } from '@/common/type';
import { RoleDropdown } from '@/components/ui/dropdown';
import { CREATE_ROLE_OPTIONS } from '@/common/constant';
import { EmployeeRole } from '@/common/enum';
import { InputControl } from '@/components/ui/input';

type Props = {
  onSelect: (option: Nullable<EmployeeRole>) => void;
  value: EmployeeRole;
  title: string;
};

export const RoleField: FC<Props> = ({
  value,
  onSelect,
  title,
}) => {
  return (
    <InputControl title={title} native={false}>
      <RoleDropdown
        options={CREATE_ROLE_OPTIONS}
        onSelect={onSelect}
        value={value}
      />
    </InputControl>
  );
};

export default RoleField;



// options={CREATE_ROLE_OPTIONS}
// onSelect={(value) => value && setValue("role", value)}
// value={role}