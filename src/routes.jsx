// src/routes.jsx
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Directors from "./pages/Directors";
import Actors from "./pages/Actors";
import ErrorPage from "./pages/ErrorPage";

// ✅ This is the actual array used in tests and for Router setup
const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/movie/:id",
    element: <Movie />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/directors",
    element: <Directors />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/actors",
    element: <Actors />,
    errorElement: <ErrorPage />,
  },
];

export default routes;
