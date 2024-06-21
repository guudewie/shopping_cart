import React, { useState } from "react";
import { Button } from "@mui/material";
import style from "./SingleProduct.module.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const SingleProduct = () => {
  const [size, setSize] = useState("M");

  const handleChange = (e) => {
    setSize(e.target.value);
  };

  const product = {
    id: 1,
    title: "Sample Product",
    subtitle: "High-quality product description",
    price: 99.99,
    imageUrl:
      "https://www.asphaltgold.com/cdn/shop/files/9ef54fd120c2af23b3127939c0c6a8b558c9e555_710671929001_Polo_Ralph_Lauren_Estate_Rib_Quarter_Zip_Pullover_Polo_Black_os_1_320x320.jpg?v=1718974013",
  };

  const monospaceStyle = {
    fontFamily: "monospace",
    fontSize: "1rem",
  };

  return (
    <div className={style.productPage}>
      <div className={style.productImage}>
        <img src={product.imageUrl} alt={product.title} />
      </div>
      <div className={style.productDetails}>
        <div className={style.productTitle}>
          <strong>{product.title}</strong>
        </div>
        <div className={style.productSubtitle}>{product.subtitle}</div>
        <div className={style.productPrice}>{product.price}</div>
        <div className={style.sizeSelect}>
          <FormControl fullWidth size="small">
            <InputLabel id="orderBySelect" sx={monospaceStyle}>
              Size
            </InputLabel>
            <Select
              labelId="orderBySelect"
              id="demo-simple-select"
              value={size}
              label="Sort by"
              type="text"
              onChange={handleChange}
              sx={monospaceStyle}
            >
              <MenuItem value={"XXS"} sx={monospaceStyle}>
                XXS
              </MenuItem>
              <MenuItem value={"XS"} sx={monospaceStyle}>
                XS
              </MenuItem>
              <MenuItem value={"S"} sx={monospaceStyle}>
                S
              </MenuItem>
              <MenuItem value={"M"} sx={monospaceStyle}>
                M
              </MenuItem>
              <MenuItem value={"L"} sx={monospaceStyle}>
                L
              </MenuItem>
              <MenuItem value={"XL"} sx={monospaceStyle}>
                XL
              </MenuItem>
              <MenuItem value={"XXL"} sx={monospaceStyle}>
                XXL
              </MenuItem>
            </Select>
          </FormControl>
        </div>
        <Button
          variant="contained"
          color="primary"
          size="large"
          fullWidth
          className={style.addToCartButton}
          sx={{
            fontFamily: "monospace",
            fontSize: "1rem",
          }}
        >
          Add to Cart
        </Button>
        <div className={style.shippingInfo}>
          <div className={style.shippingInfoItem}>
            <strong>Shipping:</strong> Calculated at Checkout.
          </div>
          <div className={style.shippingInfoItem}>
            <strong>Delivery:</strong> Estimated delivery in 3-5 business days.
          </div>
          <div className={style.shippingInfoItem}>
            <strong>Bonus:</strong> Free delivery from 99€
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
