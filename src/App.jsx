import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Drawer from "./components/Drawer/Checkout";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import Error from "./components/Error/Error";
import useProducts from "./components/useProducts/useProducts";

function App() {
  const [open, setOpen] = useState(false);
  const Location = useLocation();
  const { products, loading, error } = useProducts();

  console.log(products);

  const noFooterPages = ["/", "/construction"];
  const showFooter = !noFooterPages.includes(Location.pathname);
  const showError = Location.pathname == "*";

  const toggleDrawer = () => {
    open ? setOpen(false) : setOpen(true);
  };

  return (
    <>
      <Header toggleDrawer={() => toggleDrawer} />
      <Outlet />
      {showFooter && <Footer />}
      {showError && <Error />}
      <Drawer open={open} toggleDrawer={() => toggleDrawer} />
    </>
  );
}

export default App;
