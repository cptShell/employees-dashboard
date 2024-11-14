import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Employee } from "@/common/type";

export const employeesApi = createApi({
  reducerPath: 'employees-api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getEmployees: builder.query<Array<Employee>, void>({
      query: () => '/employees', // Dummy endpoint when fetching from JSON
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch {
          // Handle error case
        }
      },
    }),
    getEmployeeById: builder.query<Employee | undefined, number>({
      query: (id) => `/employees/${id}`, // Dummy endpoint
      async onQueryStarted(id, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          if (!data) return;
        } catch {
          // Handle error case
        }
      },
    }),
    addEmployee: builder.mutation<Employee, Partial<Employee>>({
      query: (newEmployee) => ({
        method: 'POST',
        url: '/employees', // Dummy endpoint
        body: newEmployee,
      }),
    }),
    updateEmployee: builder.mutation<Employee, Employee>({
      query: (updatedEmployee) => ({
        method: 'PUT',
        url: `/employees/${updatedEmployee.id}`, // Dummy endpoint
        body: updatedEmployee,
      }),
    }),
    deleteEmployee: builder.mutation<{ success: boolean }, number>({
      query: (id) => ({
        method: 'DELETE',
        url: `/employees/${id}`, // Dummy endpoint
      }),
    }),
  }),
})