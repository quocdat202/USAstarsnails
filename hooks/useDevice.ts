import { useState, useEffect } from "react";

type DeviceType = "mobile" | "tablet" | "laptop";

export const useDevice = () => {
  const [device, setDevice] = useState<DeviceType>("laptop");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setDevice("mobile");
      } else if (width >= 768 && width < 1024) {
        setDevice("tablet");
      } else {
        setDevice("laptop");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return device;
};
