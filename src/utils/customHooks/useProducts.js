import { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = "https://dummyjson.com/products";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchProducts = async () => {
      try {
        const { data } = await axios.get(BASE_URL);
        if (isMounted && data?.products) {
          setProducts(data.products);
        }
      } catch (err) {
        if (isMounted) setError(err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchProducts();

    return () => {
      isMounted = false;
    };
  }, []);

  return { products, loading, error };
};

export default useProducts;