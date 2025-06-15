import React, { useState, useEffect, useMemo, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Select from "react-select";
import {
  fetchProductsAll,
  fetchProducts,
  fetchProductsSelected,
} from "../../utils/api/products";
import SliderProducts from "../Slider";
import LazySection from "../LazySection";
import ErrorMessage from "../ErrorMessage";
import "./styles.scss";

const ProductsComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathParts = location.pathname.split("/").filter(Boolean);
  const categoryFromPath = pathParts[1] || null;

  const [productsCategories, setProductsCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedOption, setSelectedOption] = useState({
    value: "all",
    label: "Select by category",
  });

  const optionsCategories = useMemo(() => 
    productsCategories.map((category) => ({
      value: category?.slug,
      label: category?.name,
    })),
    [productsCategories]
  );

  const handleChangeCategory = useCallback((selectedCategory) => {
    setSelectedOption(selectedCategory);
    navigate(`/products/${selectedCategory?.value}`);
    fetchProductsSelected(setProducts, selectedCategory);
  }, [navigate]);

  useEffect(() => {
    fetchProductsAll(setProductsCategories);
  
    if (!categoryFromPath) {
      setProducts([]);
    } else {
      fetchProductsSelected(setProducts, {
        label: categoryFromPath,
        value: categoryFromPath,
      });
    }
  }, [categoryFromPath]);

  useEffect(() => {
    if (productsCategories.length > 0 && products.length === 0) {
      fetchProducts(productsCategories, setProducts);
    }
  }, [productsCategories, products]);

  useEffect(() => {
    if (categoryFromPath) {
      const category = productsCategories.find(cat => cat.slug === categoryFromPath);
      setSelectedOption({
        value: categoryFromPath,
        label: category ? category.name : categoryFromPath,
      });
    } else {
      setSelectedOption({
        value: "all",
        label: "Select by category",
      });
    }
  }, [categoryFromPath, productsCategories]);
  
  useEffect(() => {
    if (!categoryFromPath && productsCategories.length > 0) {
      fetchProducts(productsCategories, setProducts);
    }
  }, [productsCategories, categoryFromPath]);
  
  if (!products.length) return <ErrorMessage message="No products available." />;

  return (
    <div className="products">
      <div className="products__content">
        <div className="products-select__content">
          <Select
            options={optionsCategories}
            value={selectedOption}
            onChange={handleChangeCategory}
            placeholder="Select by category"
            className="products-select"
            classNamePrefix="products-select"
            inputId="products-category-select"
            aria-label="Select product category"
          />
        </div>
        {products?.map((product) => (
          <LazySection
            key={product?.slug}
            threshold={product === products[0] ? 0 : 0.1}
            className="products__category"
          >
            <h2 className="products__category--title">{product?.slug?.replace(/-/g, ' ')}</h2>
            <div className="products__category--divider" />
            <SliderProducts products={product?.products} />
          </LazySection>
        ))}
      </div>
    </div>
  );
};

export default ProductsComponent;
