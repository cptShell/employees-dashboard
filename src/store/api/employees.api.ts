import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  Employee,
  EmployeeDto,
  EmployeeEditPayload,
  EmployeeSearchParams,
} from "@/common/type";
import { EMPLOYEE_API_INVALIDATION_TAGS } from '@/common/constant';
import { EmployeeIvalidationTag } from '@/common/enum';
import {
  createEmployee,
  deleteEmployee,
  editEmployee,
  getEmployee,
  getEmployees,
} from '@/common/api';

export const employeesApi = createApi({
  reducerPath: 'employees',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_BASE }),
  tagTypes: EMPLOYEE_API_INVALIDATION_TAGS,
  endpoints: (builder) => ({
    getEmployees: builder.query<Array<Employee>, EmployeeSearchParams>({
      providesTags: (_res, _meta, params) => {
        const searchParams = new URLSearchParams();
        const flattedParams = ({
          sortKey: params.sort.key,
          sortValue: params.sort.value,
          isArchive: params.filter.isArchive,
          role: params.filter.role,
        });

        Object.entries(flattedParams).forEach(
          ([key, value]) => searchParams.append(key, String(value || ""))
        );

        return [{
          type: EmployeeIvalidationTag.ALL_EMPLOYEES,
          id: searchParams.toString(),
        }];
      },
      query: () => "",
      transformResponse: (_res, _meta, params) => getEmployees(params),
    }),
    getEmployee: builder.query<Employee | null, number>({
      providesTags: [EmployeeIvalidationTag.SINGLE_EMPLOYEE],
      query: () => "",
      transformResponse: (_res, _meta, id) => getEmployee(id),
    }),
    createEmployee: builder.mutation<Employee | null, EmployeeDto>({
      invalidatesTags: [EmployeeIvalidationTag.ALL_EMPLOYEES],
      query: () => "",
      transformResponse: (_res, _, payload) => createEmployee(payload),
    }),
    editEmployee: builder.mutation<Employee | null, EmployeeEditPayload>({
      invalidatesTags: EMPLOYEE_API_INVALIDATION_TAGS,
      query: () => "",
      transformResponse: (_res, _meta, { payload, id }) => editEmployee(payload, id),
    }),
    deleteEmployee: builder.mutation<Employee | null, number>({
      invalidatesTags: EMPLOYEE_API_INVALIDATION_TAGS,
      query: () => "",
      transformResponse: (_res, _meta, id) => deleteEmployee(id),
    }),
  }),
});

export const {
  useGetEmployeesQuery,
  useGetEmployeeQuery,
  useCreateEmployeeMutation,
  useEditEmployeeMutation,
  useDeleteEmployeeMutation,
} = employeesApi;
