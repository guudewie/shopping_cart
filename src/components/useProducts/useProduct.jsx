import { useEffect, useState } from "react";

const useProduct = ({ id }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [id]);

  return { product, loading, error };
};

export default useProduct;
