import style from "./Header.module.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from "@mui/material/Badge";
import PersonIcon from "@mui/icons-material/Person";

function Header({ toggleDrawer }) {
  return (
    <div className={style.mainContainer}>
      <div className={style.logo}>THE SHOP</div>
      <nav className={style.navContainer}>
        <a>Mens</a>
        <a>Womens</a>
        <a>Electronics</a>
      </nav>
      <div className={style.iconsContainer} onClick={toggleDrawer()}>
        <Badge
          classes={{ badge: style.badge }}
          badgeContent={"5"}
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
