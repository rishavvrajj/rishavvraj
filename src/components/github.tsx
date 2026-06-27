"use client";

import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";

export default function Github() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="text-blue-50 opacity-80 p-[10_0] flex flex-col items-center justify-center">
      <div className="max-w-90 md:max-w-xl lg:max-w-3xl">
        <GitHubCalendar
          className="inline-block"
          colorScheme="dark"
          blockSize={11.5}
          blockMargin={3}
          fontSize={13}
          username="rishavvrajj"
        />
      </div>
    </div>
  );
}