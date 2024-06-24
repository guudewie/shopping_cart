import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import style from "./SingleProduct.module.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import useProduct from "../useProducts/useProduct";
import { useOutletContext, useParams } from "react-router-dom";

const SingleProduct = () => {
  const [size, setSize] = useState("M");
  const { id } = useParams();
  const { product, loading, error } = useProduct({ id });
  const outletContext = useOutletContext();
  const cart = outletContext[3];
  const setCart = outletContext[4];

  const handleChange = (e) => {
    setSize(e.target.value);
  };

  const handleAddToCart = () => {
    const productToAdd = { ...product, size, amount: 0 };
    const id = productToAdd.id;
    let updatedCart = [];

    if (idIsInCart(cart, id)) {
      updatedCart = addOneToItem(cart, id);
    } else {
      updatedCart = [...cart, productToAdd];
    }

    setCart(updatedCart);
  };

  const idIsInCart = (cart, id) => {
    return cart.some((item) => item.id === id);
  };

  const addOneToItem = (cart, id) => {
    return cart.map((i) => {
      if (i.id == id) {
        return { ...i, amount: i.amount + 1 };
      }
      return i;
    });
  };

  const monospaceStyle = {
    fontFamily: "monospace",
    fontSize: "1rem",
  };

  return (
    <>
      {product && (
        <div className={style.productPage}>
          <div className={style.productImage}>
            <img src={product.image} alt={product.title} />
          </div>
          <div className={style.productDetails}>
            <div className={style.productTitle}>
              <strong>{product.title}</strong>
            </div>
            <div className={style.productSubtitle}>{product.description}</div>
            <div className={style.productPrice}>${product.price}</div>
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
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
            <div className={style.shippingInfo}>
              <div className={style.shippingInfoItem}>
                <strong>Shipping:</strong> Calculated at Checkout.
              </div>
              <div className={style.shippingInfoItem}>
                <strong>Delivery:</strong> Estimated delivery in 3-5 business
                days.
              </div>
              <div className={style.shippingInfoItem}>
                <strong>Bonus:</strong> Free delivery from 99€
              </div>
            </div>
          </div>
        </div>
      )}
      {loading && <div>Loading...</div>}
      {error && <div>Error loading product: {error.message}</div>}
    </>
  );
};

export default SingleProduct;
