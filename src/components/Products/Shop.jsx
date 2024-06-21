import style from "./Shop.module.css";
import Product from "./Product";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";

const Shop = () => {
  const [orderBy, setOrderBy] = useState("recommended");

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
        <div className={style.itemCount}>654 Items</div>
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
              <MenuItem value={10} sx={monospaceStyle}>
                Recommended
              </MenuItem>
              <MenuItem value={20} sx={monospaceStyle}>
                Price Lowest to Highest
              </MenuItem>
              <MenuItem value={30} sx={monospaceStyle}>
                Price Highest to Lowest
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
      <div className={style.itemContainer}>
        <Product
          key={1}
          title={"ralph lauren"}
          subTitle={"awesome sweater pro mesh"}
          price={"20"}
          url={
            "https://www.asphaltgold.com/cdn/shop/files/9ef54fd120c2af23b3127939c0c6a8b558c9e555_710671929001_Polo_Ralph_Lauren_Estate_Rib_Quarter_Zip_Pullover_Polo_Black_os_1_320x320.jpg?v=1718974013"
          }
        ></Product>
        <Product
          key={2}
          title={"ralph lauren"}
          subTitle={"awesome sweater pro mesh"}
          price={"20"}
          url={
            "https://www.asphaltgold.com/cdn/shop/files/9ef54fd120c2af23b3127939c0c6a8b558c9e555_710671929001_Polo_Ralph_Lauren_Estate_Rib_Quarter_Zip_Pullover_Polo_Black_os_1_320x320.jpg?v=1718974013"
          }
        ></Product>
        <Product
          key={3}
          title={"ralph lauren"}
          subTitle={"awesome sweater pro mesh"}
          price={"20"}
          url={
            "https://www.asphaltgold.com/cdn/shop/files/9ef54fd120c2af23b3127939c0c6a8b558c9e555_710671929001_Polo_Ralph_Lauren_Estate_Rib_Quarter_Zip_Pullover_Polo_Black_os_1_320x320.jpg?v=1718974013"
          }
        ></Product>
        <Product
          key={4}
          title={"ralph lauren"}
          subTitle={"awesome sweater pro mesh"}
          price={"20"}
          url={
            "https://www.asphaltgold.com/cdn/shop/files/9ef54fd120c2af23b3127939c0c6a8b558c9e555_710671929001_Polo_Ralph_Lauren_Estate_Rib_Quarter_Zip_Pullover_Polo_Black_os_1_320x320.jpg?v=1718974013"
          }
        ></Product>
        <Product
          key={5}
          title={"ralph lauren"}
          subTitle={"awesome sweater pro mesh"}
          price={"20"}
          url={
            "https://www.asphaltgold.com/cdn/shop/files/9ef54fd120c2af23b3127939c0c6a8b558c9e555_710671929001_Polo_Ralph_Lauren_Estate_Rib_Quarter_Zip_Pullover_Polo_Black_os_1_320x320.jpg?v=1718974013"
          }
        ></Product>
        <Product
          key={6}
          title={"ralph lauren"}
          subTitle={"awesome sweater pro mesh"}
          price={"20"}
          url={
            "https://www.asphaltgold.com/cdn/shop/files/9ef54fd120c2af23b3127939c0c6a8b558c9e555_710671929001_Polo_Ralph_Lauren_Estate_Rib_Quarter_Zip_Pullover_Polo_Black_os_1_320x320.jpg?v=1718974013"
          }
        ></Product>
      </div>
    </div>
  );
};

export default Shop;
