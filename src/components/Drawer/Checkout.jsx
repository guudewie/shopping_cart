import Drawer from "@mui/material/Drawer";
import style from "./Checkout.module.css";
import CloseIcon from "@mui/icons-material/Close";
import CheckoutItem from "./CheckoutItem";
import { Button } from "@mui/material";

const Checkout = ({ open, toggleDrawer, cartItems, addOne, subOne }) => {
  const formatCurrency = (price) => {
    const formatter = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    });
    return formatter.format(price);
  };

  const getTotalPrice = (items) => {
    let totalPrice = 0;
    items.forEach((item) => (totalPrice += item.price * item.amount));
    return totalPrice;
  };
  return (
    <Drawer open={open} anchor="right">
      <div className={style.main}>
        <div className={style.top}>
          <CloseIcon
            className={style.close}
            onClick={toggleDrawer()}
          ></CloseIcon>
          <div className={style.title}>Your Bag ({cartItems.length})</div>
          <hr className={style.divider}></hr>
        </div>
        <div className={style.products}>
          {cartItems.length > 0 &&
            cartItems.map((item) => {
              return (
                <CheckoutItem
                  key={item.id}
                  price={formatCurrency(item.price)}
                  itemCount={item.amount}
                  url={item.image}
                  title={
                    item.title.length > 40
                      ? item.title.slice(0, 40) + "..."
                      : item.title
                  }
                  addOne={() => addOne(item.id)}
                  subOne={() => subOne(item.id)}
                ></CheckoutItem>
              );
            })}
        </div>
        <div className={style.checkout}>
          <div className={style.checkoutTop}>
            <div className={style.containerBold}>
              <div>SUBTOTAL</div>
              <div>{formatCurrency(getTotalPrice(cartItems))}</div>
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
            Checkout
          </Button>
        </div>
      </div>
    </Drawer>
  );
};

export default Checkout;
