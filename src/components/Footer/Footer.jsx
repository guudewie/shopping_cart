import style from "./Footer.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  return (
    <div className={style.footerMain}>
      <div className={style.footerTop}>
        <div className={style.topLogo}>THE SHOP</div>
        <div className={style.socialMediaContainer}>
          <div className={style.topText}>Find us Online!</div>
          <div className={style.topIcon}>
            <InstagramIcon></InstagramIcon>
            <YouTubeIcon></YouTubeIcon>
            <XIcon></XIcon>
            <FacebookIcon></FacebookIcon>
          </div>
        </div>
      </div>
      <div className={style.footerBottom}>
        <div className={style.linksContainer}>
          <div className={style.linksTitle}>POLICIES</div>
          <div className={style.link}>Terms & Conditions</div>
          <div className={style.link}>Privacy</div>
          <div className={style.link}>Imprint</div>
          <div className={style.link}>Data Protection</div>
          <div className={style.link}>Cookie Settings</div>
        </div>
        <div className={style.linksContainer}>
          <div className={style.linksTitle}>FAQ</div>
          <div className={style.link}>Help Center</div>
          <div className={style.link}>Order</div>
          <div className={style.link}>Payment</div>
          <div className={style.link}>Shipping & Delivery</div>
          <div className={style.link}>Returns</div>
        </div>
        <div className={style.linksContainer}>
          <div className={style.linksTitle}>THE SHOP</div>
          <div className={style.link}>About us</div>
          <div className={style.link}>Contact & Directions</div>
          <div className={style.link}>Store Berlin</div>
          <div className={style.link}>Jobs</div>
          <div className={style.link}>Blog</div>
        </div>
        <div className={style.linksContainer}>
          <div className={style.linksTitle}>TOP BRANDS</div>
          <div className={style.link}>Wike</div>
          <div className={style.link}>Adidis</div>
          <div className={style.link}>Old Balance</div>
          <div className={style.link}>The shop exclusives</div>
          <div className={style.link}>Pair</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
