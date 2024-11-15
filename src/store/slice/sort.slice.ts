import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { EmployeeSort } from '@/common/type';
import { SortName, SortValue } from '@/common/enum';
import { INITIAL_SORT } from '@/common/constant';

type SortSlice = { sort: EmployeeSort };

const initialState: SortSlice = {
  sort: INITIAL_SORT
};

export const employeeFilterSlice = createSlice({
  name: 'employee-sort',
  initialState,
  reducers: {
    setSortBy: (state, action: PayloadAction<SortName>) => {
      const currentValue = state.sort.value;
      const isSameKey = action.payload === state.sort.key;
      const nextValue = currentValue === SortValue.ASC
        ? SortValue.DESC
        : SortValue.ASC;

      state.sort = {
        key: action.payload,
        value: !isSameKey ? SortValue.DESC : nextValue,
      };
    },
  },
});

export const { setSortBy } = employeeFilterSlice.actions;

export default employeeFilterSlice.reducer;
