"use client";

import { useEffect, useRef } from "react";

const BackgroundGradientAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size to window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Create static gradient
    const gradient = ctx.createLinearGradient(
      0,
      0,
      canvas.width,
      canvas.height,
    );

    // Add color stops with the new color palette
    gradient.addColorStop(0, "#20261f"); // Dark Forest Green
    gradient.addColorStop(0.33, "#997642"); // Warm Brown
    gradient.addColorStop(0.66, "#000000"); // Black
    gradient.addColorStop(1, "#7e523b"); // Deep Brown

    // Apply the gradient
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Add a subtle blur effect
    ctx.filter = "blur(80px)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.filter = "none";

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 -z-10 h-full w-full"
      style={{ background: "white" }}
    />
  );
};

export default BackgroundGradientAnimation;
