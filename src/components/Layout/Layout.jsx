import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../Footer/Footer";

const Layout = () => {
  const Location = useLocation();
  const showFooter = Location.pathname !== "/";

  return (
    <>
      <Header />
      <Outlet />
      {showFooter && <Footer />}
    </>
  );
};

export default Layout;
