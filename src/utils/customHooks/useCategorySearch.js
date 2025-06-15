import { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = "https://dummyjson.com/products";

const useCategorySearch = (query = "") => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCategories = async (q) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${BASE_URL}/search?q=${q}`);
      setData(response?.data);
    } catch (err) {
      setError("Error fetching categories");
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories(query);
  }, [query]);

  return { data, loading, error, refetch: fetchCategories };
};

export default useCategorySearch;
