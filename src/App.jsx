import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./components/LandingPage/LandingPage";
import Error from "./components/Error/Error";
import Construction from "./components/Error/Construction";
import Checkout from "./components/Drawer/Checkout";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    open ? setOpen(false) : setOpen(true);
  };
  return (
    <>
      <Header toggleDrawer={() => toggleDrawer} />
      <LandingPage></LandingPage>
      <Checkout open={open} toggleDrawer={() => toggleDrawer}></Checkout>
      <Footer></Footer>
    </>
  );
}

export default App;
