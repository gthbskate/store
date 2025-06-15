import { useState, useEffect } from "react";
import { fetchProductById } from "../api/products";

const useProductById = (id) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    const controller = new AbortController();
    const signal = controller.signal;

    const loadProduct = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await fetchProductById(id, { signal });
        if (!signal.aborted) {
          setProduct(data);
        }
      } catch (err) {
        if (!signal.aborted) {
          setError("Error loading product");
        }
      } finally {
        if (!signal.aborted) {
          setLoading(false);
        }
      }
    };

    loadProduct();

    return () => controller.abort();
  }, [id]);

  return { product, loading, error };
};

export default useProductById;
