import style from "./Error.module.css";

const Error = () => {
  return (
    <div className={style.container}>
      <div className={style.title}>404 Not Found</div>
      <div className={style.subTitle}>
        It seems like this page does not exist
      </div>
      <div className={style.button}>back Home</div>
    </div>
  );
};

export default Error;
