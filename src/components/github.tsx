"use client";

import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";

export default function Github() {
  const [mounted, setMounted] = useState(false);
  const [fontSize, setFontSize] = useState(9);

  useEffect(() => {
    setMounted(true);

    const updateFontSize = () => {
      const w = window.innerWidth;
      if (w < 375) setFontSize(8);       // iPhone SE
      else if (w < 640) setFontSize(9);  // mobile
      else if (w < 1024) setFontSize(10); // tablet
      else setFontSize(12);               // laptop
    };

    updateFontSize();
    window.addEventListener("resize", updateFontSize);
    return () => window.removeEventListener("resize", updateFontSize);
  }, []);

  if (!mounted) return null;

  return (
    <div className="text-blue-50 opacity-80 flex flex-col items-center justify-center">
      <div className="w-full max-w-90 sm:max-w-3xl lg:max-w-3xl overflow-x-auto">
        <GitHubCalendar
          className="inline-block"
          colorScheme="dark"
          blockSize={11.5}
          blockMargin={3}
          fontSize={fontSize}
          username="rishavvrajj"
        />
      </div>
    </div>
  );
}