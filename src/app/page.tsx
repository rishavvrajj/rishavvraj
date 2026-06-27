"use client"

import Nav from "@/components/nav";
import Profile from "@/components/profile";
import Bio from "@/components/bio";
import Github from "@/components/github";
import Fotter from "@/components/fotter";

export default function page() {
  return (
    <section className="relative flex flex-col gap-3 font-mono p-[0_25]">
      <Nav />
      <Profile />
      <Bio />
      <Github />
      <Fotter />
    </section>
  );
};