import style from "./Header.module.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

function Header() {
  return (
    <div className={style.mainContainer}>
      <div className={style.logo}></div>
      <nav className={style.navContainer}>
        <a>Electronics</a>
        <a>Clothing</a>
        <a>Appliences</a>
      </nav>
      <div className={style.iconsContainer}>
        <ShoppingCartOutlinedIcon />
        <ShoppingCartOutlinedIcon />
        <ShoppingCartOutlinedIcon />
      </div>
    </div>
  );
}

export default Header;
