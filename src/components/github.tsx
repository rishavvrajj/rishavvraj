"use client"

import { useEffect, useState } from "react"
import { GitHubCalendar } from "react-github-calendar"

export default function Github() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true)
  }, []);

  if (!mounted) {
    return null
  };

  return (
    <div className="max-w-3xl flex flex-col items-center justify-center">
        <GitHubCalendar blockSize={11.5} blockMargin={3} fontSize={12} username="rishavvrajj" />
    </div>
  );
};