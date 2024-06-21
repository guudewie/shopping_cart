import style from "./CheckoutItem.module.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const CheckoutItem = ({ price, itemCount, url, title }) => {
  return (
    <>
      <div className={style.mainContainer}>
        <div className={style.left}>
          <img className={style.picture} src={url} />
        </div>
        <div className={style.right}>
          <div className={style.title}>{title}</div>
          <div className={style.button}>
            <AddIcon fontSize="small" className={style.icon}></AddIcon>
            <div>{itemCount}</div>
            <RemoveIcon fontSize="small" className={style.icon}></RemoveIcon>
          </div>
        </div>
        <div className={style.price}>{price}</div>
      </div>
      <hr className={style.divider}></hr>
    </>
  );
};

export default CheckoutItem;
