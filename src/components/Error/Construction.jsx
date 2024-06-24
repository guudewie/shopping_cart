import style from "./Error.module.css";
import { Link } from "react-router-dom";

const Construction = () => {
  return (
    <div className={style.container}>
      <div className={style.title}>Work in Progress</div>
      <div className={style.subTitle}>This page is under construction</div>
      <Link to="/">
        <div className={style.button}>back Home</div>
      </Link>
    </div>
  );
};

export default Construction;
