import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "../styles/global.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContent from "./components/MainContent.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import CountryDetail from "./components/countryDetail.jsx";
// import {loader as countryLoader} from'../src/components/MainContent'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Error</div>,
    // loader: countryLoader,

    children: [
      {
        path: "/",
        element: <MainContent />,
        children: [
          {
            path: ":Country",
            element: <CountryDetail />,
          },
        ],
      },

      {
        path: "error",
        element: <ErrorPage />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
