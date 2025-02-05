import { createBrowserRouter } from "react-router-dom";
import Film from "../Film/Films";
import Home from "../Pages/Home";
import ErrorPage from "../pages/404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Film />,
    errorElement: <ErrorPage />,
    children: [
        {
            path: "/film/:filmId",
            element: <Film />
          }
    ]
}
]);

export default router;