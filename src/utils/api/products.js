import axios from "axios";

const BASE_URL = "https://dummyjson.com/products";

export const fetchProductsAll = async (setProductsCategories) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/categories`);
    setProductsCategories(data);
  } catch (error) {
    console.error("Error fetching all categories:", error);
  }
};

export const fetchProducts = async (categories, setProducts) => {
  try {
    const requests = categories.map(async (category) => {
      const { data } = await axios.get(
        `${BASE_URL}/category/${category?.slug}`
      );
      return {
        ...data,
        slug: category.name,
      };
    });

    const results = await Promise.all(requests);
    setProducts(results);
  } catch (error) {
    console.error("Error fetching products by category:", error);
  }
};

export const fetchProductsSelected = async (setProducts, selectedCategory) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/category/${selectedCategory?.value}`
    );
    setProducts([
      {
        ...data,
        slug: selectedCategory?.label,
      },
    ]);
  } catch (error) {
    console.error("Error fetching selected category:", error);
  }
};

export const fetchProductById = async (id) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${id}`);
    return data
  } catch (error) {
    console.error("Error fetching product by id:", error);
  }
};
