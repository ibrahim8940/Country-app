// src/routes/router.jsx
import { createHashRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Country from "../pages/Country";
import NotFound from "../pages/NotFound";
import CoutryDetails from "../Layouts/CoutryDetails";

const router = createHashRouter([
  {
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "country", element: <Country /> },
      { path: "country/:id", element: <CoutryDetails /> },
    ],
  },
]);

export default router;
