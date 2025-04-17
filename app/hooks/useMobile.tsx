import { useState, useEffect } from "react";

/**
 * Custom hook to detect if the user is on a mobile device
 * @param breakpoint - Optional breakpoint in pixels (default: 768)
 * @param useUserAgent - Whether to also check user agent for mobile detection (default: false)
 * @returns {Object} Object containing isMobile boolean and window width
 */
export const useMobile = (
  breakpoint: number = 768,
  useUserAgent: boolean = false,
) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    // Function to check if device is mobile based on user agent
    const checkUserAgent = (): boolean => {
      if (typeof window === "undefined") return false;

      const userAgent = navigator.userAgent || navigator.vendor;

      // Regular expressions for mobile devices
      const mobileRegex =
        /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i;

      return mobileRegex.test(userAgent.toLowerCase());
    };

    // Function to update state based on window width and user agent
    const updateMobileState = () => {
      const width = window.innerWidth;
      setWindowWidth(width);

      // Consider device mobile if width is below breakpoint OR (if useUserAgent is true) user agent indicates mobile
      setIsMobile(width < breakpoint || (useUserAgent && checkUserAgent()));
    };

    // Initial check
    updateMobileState();

    // Add event listener for window resize
    window.addEventListener("resize", updateMobileState);

    // Cleanup
    return () => window.removeEventListener("resize", updateMobileState);
  }, [breakpoint, useUserAgent]);

  return { isMobile, windowWidth };
};

export default useMobile;
