import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import LazyImage from "../LazyImage";
import Loader from "../Loader";
import ErrorMessage from "../ErrorMessage";
import useCategorySearch from "../../utils/customHooks/useCategorySearch";
import search from "../../assets/icons/search.svg";
import "./styles.scss";

const CardCategory = ({ category }) => (
  <div className="categories__card-category">
    <Link to={`/products/${category.category}`} className="categories__card-category--link">
      <LazyImage 
        src={category.images?.[0]}
        alt={category.title}
        className="categories__card-category--image"
        lazy={true}
      />
      <h3 className="categories__card-category--name">{category.category}</h3>
    </Link>
  </div>
);

const Categories = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [query, setQuery] = useState("");
  const { data, loading, error } = useCategorySearch(query);

  const products = data?.products || [];

  const productsByCategory = products.reduce((acc, product) => {
    if (!acc.find(p => p.category === product.category)) acc.push(product);
    return acc;
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(searchQuery);
  };

  return (
    <div className="categories">
      <div className="categories__content">
        <h2 className="categories__title">Explore by Category</h2>

        <form className="categories__search--form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="categories__search--input"
            placeholder="Search"
            aria-label="Search categories"
            autoComplete="off"
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
          />
          <button
            type="submit"
            className="categories__search--button"
            aria-label="Search"
          >
            <img
              src={search}
              alt="Search Icon"
              className="categories__search--icon"
              loading="lazy"
              height="24"
              width="24"
            />
          </button>
        </form>

        <div className="categories__list">
          {loading && <Loader />}
          {error && <ErrorMessage message={error} />}
          {!loading && !error && productsByCategory.length > 0 ? (
            productsByCategory.map((category) => (
              <CardCategory key={category.id} category={category} />
            ))
          ) : (!loading && !error && productsByCategory.length === 0) ? (
            <p>No results found. Try a different keyword.</p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

CardCategory.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    category: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Categories;

