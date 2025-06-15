import React from "react";
import PropTypes from "prop-types";
import { useInView } from "react-intersection-observer";

const LazySection = ({ children, height = '100dvh', threshold = 0.1 }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: threshold,
  });

  return (
    <section ref={ref}>
      {inView ? children : <div style={{ height }}></div>}
    </section>
  );
};

LazySection.propTypes = {
  children: PropTypes.node.isRequired,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  threshold: PropTypes.number,
};

export default LazySection;
