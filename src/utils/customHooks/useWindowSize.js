import { useEffect, useState } from "react";

const useWindowSize = (
  tabletBreakPoint = 576,
  desktopBreakpoint = 992,
  smallMobileBreakpoint = 420
) => {
  const getSize = () => ({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [windowSize, setWindowSize] = useState(() => {
    if (typeof window !== "undefined") {
      return getSize();
    }
    return { width: 0, height: 0 };
  });

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth, innerHeight } = window;
      setWindowSize((prevSize) => {
        if (prevSize.width === innerWidth && prevSize.height === innerHeight) {
          return prevSize;
        }
        return { width: innerWidth, height: innerHeight };
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { width = 0 } = windowSize;

  const isMobile = width < tabletBreakPoint;
  const isMobileSmall = width < smallMobileBreakpoint;
  const isTablet = width >= tabletBreakPoint && width < desktopBreakpoint;
  const isTabletWiderRange = width >= smallMobileBreakpoint && width < desktopBreakpoint;
  const isDesktop = width >= desktopBreakpoint;

  return {
    width: windowSize.width,
    height: windowSize.height,
    isMobile,
    isMobileSmall,
    isTablet,
    isTabletWiderRange,
    isDesktop,
  };
};

export default useWindowSize;
