import React, { useState, useEffect } from "react";
import "./App.css";
import RootLayout from "./RootLayout";
import { Home } from "./pages/Home.tsx";
import { InspoBoard } from "./pages/InspoBoard.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/inspo", element: <InspoBoard /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
