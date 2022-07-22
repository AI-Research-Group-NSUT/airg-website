import React from "react";

export const useMediaQuery = ({ width }) => {
  if (typeof window == "undefined") {
    return false;
  }

  const [isSmallScreen, setIsSmallScreen] = React.useState(
    window.matchMedia(`(max-width: ${width})`).matches.valueOf()
  );

  React.useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${width})`);

    mq.addEventListener("change", () => {
      setIsSmallScreen(!mq.matches);
    });

    return () => {
      mq.removeEventListener("change", () => {});
    };
  }, [width]);

  return isSmallScreen;
};
