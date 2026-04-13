import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Components/HomePage.jsx";
import BookDetail from "./Components/BookDetail.jsx";
import FindBooks from "./Components/FindBooks.jsx";

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      { 
        path: "/books/:category", 
        element: <FindBooks /> 
      },

      { 
        path: "/book/:id",
         element: <BookDetail /> 
        },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRoute} />
  </StrictMode>,
);
