import * as ReactDOMClient from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { routes } from "./routes";
import { Provider } from "react-redux";
import { store } from "./store/store";

import "@/styles/reset.scss";

const router = createBrowserRouter(routes);

const rootElement = document.getElementById("root") as HTMLElement;

ReactDOMClient.createRoot(rootElement).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
