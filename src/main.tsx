import { Provider } from "react-redux";
import * as ReactDOMClient from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { store } from "./store/store";
import { routes } from "./routes";

import "@/styles/styles.scss";

const router = createBrowserRouter(routes);

const rootElement = document.getElementById("root") as HTMLElement;

ReactDOMClient.createRoot(rootElement).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
