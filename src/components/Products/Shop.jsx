import style from "./Shop.module.css";
import Product from "./Product";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Shop = () => {
  const [orderBy, setOrderBy] = useState("Recommended");
  const [products, loading, error] = useOutletContext();
  const Location = useLocation().pathname;

  if (error) console.log(error);

  console.log(products);

  const filterProducts = () => {
    if (Location == "/shop/mens") {
      return products.filter((product) => {
        return product.category == "men's clothing";
      });
    } else if (Location == "/shop/womens") {
      return products.filter((product) => {
        return (
          product.category == "women's clothing" ||
          product.category == "jewelery"
        );
      });
    } else {
      return products.filter((product) => {
        return product.category == "electronics";
      });
    }
  };

  const handleChange = (e) => {
    setOrderBy(e.target.value);
  };

  const monospaceStyle = {
    fontFamily: "monospace",
    fontSize: ".8rem",
  };

  return (
    <div className={style.mainContainer}>
      <div className={style.shopHeader}>
        <div className={style.itemCount}>{products.length} Items</div>
        <Box className={style.sortContainer}>
          <FormControl fullWidth size="small">
            <InputLabel id="orderBySelect" sx={monospaceStyle}>
              Sort By
            </InputLabel>
            <Select
              labelId="orderBySelect"
              id="demo-simple-select"
              value={orderBy}
              label="Sort by"
              type="text"
              onChange={handleChange}
              sx={monospaceStyle}
            >
              <MenuItem value={"Recommended"} sx={monospaceStyle}>
                Recommended
              </MenuItem>
              <MenuItem value={"Price Lowest to Highest"} sx={monospaceStyle}>
                Price Lowest to Highest
              </MenuItem>
              <MenuItem value={"Price Highest to Lowest"} sx={monospaceStyle}>
                Price Highest to Lowest
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
      <div className={style.itemContainer}>
        {loading
          ? "LOADING"
          : filterProducts().length > 0 &&
            filterProducts().map((p) => {
              return (
                <Product
                  key={p.id}
                  title={p.title}
                  subTitle={p.description}
                  price={p.price}
                  url={p.image}
                ></Product>
              );
            })}
      </div>
    </div>
  );
};

export default Shop;
