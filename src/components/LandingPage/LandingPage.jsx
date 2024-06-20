import style from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <>
      <div className={style.mainPicture}>
        <div className={style.textContainer}>
          <div className={style.title}>Summer Sale</div>
          <div className={style.subTitle}>Shop exclusive styles now</div>
        </div>
        <div className={style.button}>Shop now</div>
      </div>
    </>
  );
};

export default LandingPage;
