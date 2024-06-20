import { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts([...data]);
        console.log("data", data);
      });
  }, []);

  products.map((product) => console.log(product.image));

  return (
    <>
      <div>
        {products.length > 0 ? (
          <ul>
            {products.map((product) => (
              <div key={product.id}>
                <div>{product.title}</div>
                <div>{product.description}</div>
                <img src={product.image} />
              </div>
            ))}
          </ul>
        ) : (
          <p>Loading products...</p>
        )}
      </div>
    </>
  );
};

export default useProducts;
