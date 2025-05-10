import { useState, useEffect } from "react";

function getBreakpoint(width) {
  if (width <= 480) return "mobile";
  if (width <= 768) return "tablet";
  if (width <= 1200) return "mid-laptop";
  return "desktop";
}

export default function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState(getBreakpoint(window.innerWidth));

  useEffect(() => {
    const handleResize = () => {
      setBreakpoint(getBreakpoint(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return breakpoint;
}