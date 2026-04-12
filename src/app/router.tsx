import { createBrowserRouter, redirect } from "react-router";

import { HomePage } from "@/pages";

export const router = createBrowserRouter([
  {
    path: "/",
    loader: () => redirect("/gallery"),
  },
  {
    path: "/:type",
    element: <HomePage />,
  },
]);
