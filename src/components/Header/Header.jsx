import style from "./Header.module.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from "@mui/material/Badge";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Header({ toggleDrawer, items }) {
  const Location = useLocation();
  const currPage = Location.pathname;

  return (
    <div className={style.mainContainer}>
      <Link to="/">
        <div className={style.logo}>THE SHOP</div>
      </Link>
      <nav className={style.navContainer}>
        <Link to="/shop/mens">
          {currPage == "/shop/mens" ? (
            <div className={style.underlined}>Mens</div>
          ) : (
            <div>Mens</div>
          )}
        </Link>
        <Link to="/shop/womens">
          {currPage == "/shop/womens" ? (
            <div className={style.underlined}>Womens</div>
          ) : (
            <div>Womens</div>
          )}
        </Link>
        <Link to="/shop/electronics">
          {currPage == "/shop/electronics" ? (
            <div className={style.underlined}>Electronics</div>
          ) : (
            <div>Electronics</div>
          )}
        </Link>
      </nav>
      <div className={style.iconsContainer} onClick={toggleDrawer()}>
        <Badge
          classes={{ badge: style.badge }}
          badgeContent={items}
          color="primary"
          max={99}
        >
          <ShoppingCartOutlinedIcon />
        </Badge>
        <PersonIcon></PersonIcon>
      </div>
    </div>
  );
}

export default Header;
