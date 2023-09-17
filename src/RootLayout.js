import React from "react";
// Outlet => render the root list routes
import { Outlet } from "react-router-dom";
import Navigation from "./Components/Nav.tsx";
// import Footer from "./components/Footer";

const RootLayout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};
export default RootLayout;
