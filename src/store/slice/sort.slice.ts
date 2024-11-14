import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { EmployeeSort } from '@/common/type';
import { SortName, SortValue } from '@/common/enum';
import { INITIAL_SORT } from '@/common/constant';
import { stat } from 'fs';

type SortSlice = { sort: EmployeeSort };

const initialState: SortSlice = {
  sort: INITIAL_SORT
};

export const employeeFilterSlice = createSlice({
  name: 'employee-sort',
  initialState,
  reducers: {
    setSort: (state, action: PayloadAction<EmployeeSort>) => {
      state.sort = action.payload;
    },
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
    setSortOrder: (state, action: PayloadAction<SortValue>) => {
      state.sort.value = state.sort.value === SortValue.ASC
        ? SortValue.DESC
        : SortValue.ASC;
    }
  },
});

export const {
  setSortBy,
  setSortOrder,
  setSort,
} = employeeFilterSlice.actions;

export default employeeFilterSlice.reducer;
