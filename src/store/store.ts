import { configureStore } from '@reduxjs/toolkit';
import sortSlice from "./slice/sort.slice";
import filterSlice from "./slice/filter.slice";
import { useDispatch, useSelector } from 'react-redux';
import { employeesApi } from './api/employees.api';

export const store = configureStore({
  reducer: {
    sort: sortSlice,
    filter: filterSlice,
    [employeesApi.reducerPath]: employeesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }).concat(employeesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
