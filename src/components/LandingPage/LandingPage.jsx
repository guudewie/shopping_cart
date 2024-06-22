import style from "./LandingPage.module.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <div className={style.mainPicture}>
        <div className={style.textContainer}>
          <div className={style.title}>Summer Sale</div>
          <div className={style.subTitle}>Shop exclusive styles now</div>
        </div>
        <Link to="/shop">
          <div className={style.button}>Shop now</div>
        </Link>
      </div>
    </>
  );
};

export default LandingPage;
