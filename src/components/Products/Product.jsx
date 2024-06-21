import style from "./Product.module.css";

const Product = ({ url, title, subTitle, price }) => {
  const formatCurrency = (price) => {
    // Format price as Euro currency
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "EUR",
    });

    return formatter.format(price);
  };

  return (
    <div className={style.container}>
      <img className={style.image} src={url} />
      <div className={style.title}>{title}</div>
      <div className={style.subTitle}>{subTitle}</div>
      <div className={style.price}>{formatCurrency(price)}</div>
    </div>
  );
};

export default Product;
