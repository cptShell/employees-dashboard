import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { EmployeeFilter, Nullable } from '@/common/type';
import { EmployeeRole } from '@/common/enum';

export interface FilterSlice {
  filter: EmployeeFilter;
};

const initialState: FilterSlice = {
  filter: {},
};

export const employeeFilterSlice = createSlice({
  name: 'employee-filter',
  initialState,
  reducers: {
    setFilterByRole: (state, action: PayloadAction<Nullable<EmployeeRole>>) => {
      state.filter.role = action.payload;
    },
    setFilterByStatus: (state, action: PayloadAction<Nullable<boolean>>) => {
      state.filter.isArchive = action.payload;
    },
    resetFilters: (state) => {
      state.filter = {};
    }
  },
});

export const {
  setFilterByRole,
  setFilterByStatus,
  resetFilters,
} = employeeFilterSlice.actions;

export default employeeFilterSlice.reducer;
