import {
  RouterProvider as Provider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import routes from "./routes";

const router = createBrowserRouter(
  createRoutesFromElements(
    routes.map((route) => (
      <Route
        path={route.path}
        element={<route.component route={route} />}
      ></Route>
    ))
  )
);
