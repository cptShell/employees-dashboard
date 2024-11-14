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
      state.sort.key = action.payload;
    },
    setSortOrder: (state, action: PayloadAction<SortValue>) => {
      state.sort.value = action.payload;
    }
  },
});

export const {
  setSortBy,
  setSortOrder,
} = employeeFilterSlice.actions;

export default employeeFilterSlice.reducer;
