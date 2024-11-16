import { useRouteError } from "react-router-dom";
import { NoEmployeePlaceholder } from "../ui/placeholder";

export const ErrorBoundary = () => {
  const error = useRouteError() as Error;

  return <NoEmployeePlaceholder reason={error.message} />
}
