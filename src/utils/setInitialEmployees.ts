import { INITIAL_EMPLOYEES_JSON } from "@/mock/employees/employees";

export const setInitialEmployees = () => {
  const json = JSON.stringify(INITIAL_EMPLOYEES_JSON);
  localStorage.setItem(
    import.meta.env.VITE_STORAGE_KEY,
    json,
  );

  return json;
}
