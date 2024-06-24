import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Drawer from "./components/Drawer/Checkout";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import Error from "./components/Error/Error";
import useProducts from "./components/useProducts/useProducts";

function App() {
  const [open, setOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const Location = useLocation();
  const { products, loading, error } = useProducts();

  const noFooterPages = ["/", "/construction"];
  const showFooter = !noFooterPages.includes(Location.pathname);
  const showError = Location.pathname == "*";

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const addOneToItem = (id) => {
    const updatedCart = cart.map((i) => {
      if (i.id == id) {
        return { ...i, amount: i.amount + 1 };
      }
      return i;
    });
    setCart(updatedCart);
  };

  const subOneFromItem = (id) => {
    const updatedCart = cart
      .map((i) => {
        if (i.id == id) {
          return i.amount - 1 >= 1 ? { ...i, amount: i.amount - 1 } : null;
        }
        return i;
      })
      .filter((i) => i !== null);
    setCart(updatedCart);
  };

  return (
    <>
      <Header toggleDrawer={() => toggleDrawer} items={cart.length} />
      <Outlet context={[products, loading, error, cart, setCart]} />
      {showFooter && <Footer />}
      {showError && <Error />}
      <Drawer
        open={open}
        toggleDrawer={() => toggleDrawer}
        addOne={(id) => addOneToItem(id)}
        subOne={(id) => subOneFromItem(id)}
        cartItems={cart}
      />
    </>
  );
}

export default App;
