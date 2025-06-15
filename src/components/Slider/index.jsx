import React from "react";
import PropTypes from "prop-types";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import useWindowSize from "../../utils/customHooks/useWindowSize";
import CardProduct from "../CardProduct";
import ErrorMessage from "../ErrorMessage";

import "./styles.scss";

const SliderProducts = ({ products, size }) => {
  const { isMobile, isTablet } = useWindowSize();
  const swiperSlidesPerView = isMobile ? 1 : isTablet ? 2 : 3;

  if (!products.length) return <ErrorMessage message="No products available." />;

  return (
    <>
      <Swiper
        slidesPerView={swiperSlidesPerView}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {products?.map((product, index) => index < (size || products?.length - 1) && 
          <SwiperSlide key={product?.id}><CardProduct product={product} /></SwiperSlide>)}
      </Swiper>
    </>
  );
};

SliderProducts.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    })
  ).isRequired,
  size: PropTypes.number,
};

export default SliderProducts;
