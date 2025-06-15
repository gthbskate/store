import { useState, useEffect } from "react";
import { fetchProductsSelected } from "../api/products";

const useProductsSelected = (category) => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!category) return;

    const controller = new AbortController();

    const load = async () => {
      try {
        setLoading(true);
        setError(null);
        await fetchProductsSelected(setProducts, { label: category, value: category });
      } catch (err) {
        if (!controller.signal.aborted) {
          setError("Could not load related products");
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    load();

    return () => controller.abort();
  }, [category]);

  return { products, loading, error };
};

export default useProductsSelected;
