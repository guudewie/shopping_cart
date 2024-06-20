import Drawer from "@mui/material/Drawer";
import style from "./Checkout.module.css";
import CloseIcon from "@mui/icons-material/Close";

const Checkout = ({ open, toggleDrawer }) => {
  return (
    <Drawer open={open} anchor="right">
      <div className={style.main}>
        <div className={style.top}>
          <CloseIcon onClick={toggleDrawer()}></CloseIcon>
          You have 5 items in yor bag
        </div>
        <div className={style.products}></div>
        <div className={style.checkout}>
          <div className={style.container}>
            <div>SUBTOTAL</div>
            <div>PRICE</div>
          </div>
          <div className={style.container}>
            <div>Shipping</div>
            <div>Calculated at Checkout</div>
          </div>
          <div className={style.checkoutBtn}>CHECKOUT</div>
        </div>
      </div>
    </Drawer>
  );
};

export default Checkout;
