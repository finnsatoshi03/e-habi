import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export const ScrollIndicator = () => {
  const location = usePathname();
  const isHome = location === "/";

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Get window height and check if scroll position is beyond first screen
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY;

      // Hide when scrolled past first viewport height
      setIsVisible(scrollPosition < windowHeight);
    };

    // Add event listener
    window.addEventListener("scroll", handleScroll);

    // Initial check
    handleScroll();

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed bottom-4 left-1/2 z-10 -translate-x-1/2"
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 20,
      }}
      transition={{ duration: 0.3 }}
    >
      {/* looks like mouse  */}
      <div className="flex items-center gap-2">
        <div
          className={`flex h-6 w-4 justify-center rounded-full ${isHome ? "bg-white" : "bg-black/20"} pt-1 shadow`}
        >
          <div
            className="size-1 animate-bounce rounded-full bg-red-500"
            style={{
              animationDuration: "1s",
              animationTimingFunction: "ease-in-out",
            }}
          />
        </div>
        <p className="text-xs uppercase">Pindutin pataas</p>
      </div>
    </motion.div>
  );
};
