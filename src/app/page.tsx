"use client"

import Nav from "@/components/nav";
import Background from "@/components/background";
import Profile from "@/components/profile";
import Bio from "@/components/bio";
import Github from "@/components/github";
import Fotter from "@/components/fotter";

export default function page() {
  return (
    <div className="flex flex-col gap-3 font-mono text-blue-50">
    <section className="Header font-mono border-b-2 border-zinc-700">
      <Nav />
      <Background />
      <Profile />
      <Bio />
    </section>
      <Github />
      <Fotter />
    </div>
  );
};