import Drawer from "@mui/material/Drawer";
import style from "./Checkout.module.css";
import CloseIcon from "@mui/icons-material/Close";
import CheckoutItem from "./CheckoutItem";
import { Button } from "@mui/material";

const Checkout = ({ open, toggleDrawer }) => {
  return (
    <Drawer open={open} anchor="right">
      <div className={style.main}>
        <div className={style.top}>
          <CloseIcon
            className={style.close}
            onClick={toggleDrawer()}
          ></CloseIcon>
          <div className={style.title}>Your Bag (5)</div>
          <hr className={style.divider}></hr>
        </div>
        <div className={style.products}>
          <CheckoutItem
            price={20}
            itemCount={8}
            url={""}
            title={"Best Watch Ever"}
          ></CheckoutItem>
          <CheckoutItem
            price={20}
            itemCount={8}
            url={""}
            title={"Best Watch Ever"}
          ></CheckoutItem>
          <CheckoutItem
            price={20}
            itemCount={8}
            url={""}
            title={"Best Watch Ever"}
          ></CheckoutItem>
        </div>
        <div className={style.checkout}>
          <div className={style.checkoutTop}>
            <div className={style.containerBold}>
              <div>SUBTOTAL</div>
              <div>PRICE</div>
            </div>
            <div className={style.containerLight}>
              <div>Shipping</div>
              <div>Calculated at Checkout</div>
            </div>
          </div>
          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            className={style.addToCartButton}
            sx={{
              fontFamily: "monospace",
              fontSize: "1rem",
              borderRadius: "2rem",
            }}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </Drawer>
  );
};

export default Checkout;
