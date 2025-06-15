// component load image lazy or eager to globlal use and configuration
import React from "react";
import PropTypes from "prop-types";
import notImage from "../../assets/images/not-image.png";
import { useInView } from 'react-intersection-observer';
import "./styles.scss";

const LazyImage = ({ 
    src, 
    alt, 
    width, 
    height,
    className = '',
    lazy = true,
    figcaption
  }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  if (!alt) return (
  <figure className="global__placeholder">
    <img
      src={notImage}
      alt="placeholder"
      width="150"
      height="185"
      loading="lazy"
    />
  </figure>);

  const isLazy = lazy ? "lazy" : "eager";

  return (
    <div ref={ref} className="global__image">
      {inView ? (
        <figure>
          <picture className="global__picture">
            <source srcSet={src} media="(min-width: 1200px)" />
            <source srcSet={src} media="(min-width: 768px)" />
            <source srcSet={src} media="(max-width: 767px)" />
            <img
              src={src}
              alt={alt}
              width={width}
              height={height}
              className={className}
              loading={isLazy}
            />
          </picture>
          {figcaption && <figcaption className="global__figcaption">{figcaption}</figcaption>}
        </figure>
      ) : (
        <figure className="global__placeholder">
          <img
            src={notImage}
            alt="placeholder"
            width="150"
            height="185"
            loading="lazy"
          />
        </figure>
      )}
    </div>
  );
};

LazyImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  className: PropTypes.string,
  lazy: PropTypes.bool,
  figcaption: PropTypes.node,
};

LazyImage.defaultProps = {
  className: "",
  lazy: true,
  width: undefined,
  height: undefined,
  figcaption: null,
};

export default LazyImage;