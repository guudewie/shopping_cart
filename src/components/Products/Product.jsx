import { Link, useNavigate } from "react-router-dom";
import style from "./Product.module.css";

const Product = ({ url, title, subTitle, price, id }) => {
  const navigate = useNavigate();
  const formatCurrency = (price) => {
    const formatter = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    });
    return formatter.format(price);
  };

  const handleClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className={style.container} onClick={() => handleClick(id)}>
      <div className={style.pictureContainer}>
        <img className={style.image} src={url} />
      </div>
      <div className={style.informationContainer}>
        <div className={style.title}>{title}</div>
        {
          //<div className={style.subTitle}>{subTitle}</div>
        }
        <div className={style.price}>{formatCurrency(price)}</div>
      </div>
    </div>
  );
};

export default Product;
