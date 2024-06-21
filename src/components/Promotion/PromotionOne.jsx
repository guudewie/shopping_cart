import style from "./PromotionOne.module.css";

const PromotionOne = () => {
  return (
    <div className={style.promotionContainer}>
      <div className={style.left}></div>
      <div className={style.right}>
        <div className={style.text}>
          <div className={style.title}>Visit us</div>
          <div className={style.subTitle}>Tokio | Berlin | Milan</div>
        </div>
        <div className={style.button}>Directions</div>
      </div>
    </div>
  );
};

export default PromotionOne;
