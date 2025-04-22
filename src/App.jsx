import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Plans from "./pages/Plans/Plans";
import Notfound from "./pages/Notfound/Notfound";
import More from "./pages/More/More";
import HealthyMeals from "./pages/HealthyMeals/HealthyMeals";
import FitnessTip from './pages/FitnessTip/FitnessTip';
import CalorieCalculator from './pages/CalorieCalculator/CalorieCalculator';

function App() {
  let x = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "Home", element: <Home /> },
        { path: "About", element: <About /> },
        { path: "Contact", element: <Contact /> },
        { path: "Plans", element: <Plans /> },
        { path: "more", element: <More /> },
        { path: "HealthyMeals", element: <HealthyMeals /> },
        { path: "CalorieCalculator", element: <CalorieCalculator /> },
        { path: "FitnessTip", element: <FitnessTip /> },
        { path: "*", element: <Notfound /> },
      ],
    },
  ]);
  return <RouterProvider router={x}></RouterProvider>;
}

export default App;
