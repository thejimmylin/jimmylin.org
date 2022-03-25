import { useState, useEffect } from "react";

const LightFilter = ({ useIsDark, windowScrollY }) => {
  const [isDark, _] = useIsDark;
  const [innerHeight, setInnerHeight] = useState(1080);
  useEffect(() => {
    setInnerHeight(window.innerHeight);
  }, [setInnerHeight]);
  return (
    <>
      <div
        className="absolute h-screen w-full bg-night"
        style={{
          opacity: isDark ? "40%" : "30%",
        }}
      ></div>
      <div
        className="absolute h-screen w-full bg-night"
        style={{
          opacity: `${(windowScrollY / innerHeight) * 100}%`,
        }}
      ></div>
    </>
  );
};

export default LightFilter;
