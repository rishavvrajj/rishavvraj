'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItem = [
  { label: 'Home', href: "/" },
  // { label: 'About', href: "/about" },
  // { label: 'Blog', href: "/blog" },
];

export default function page() {
  return (
    <div className="text-blue-50 font-mono">
      <header className="min-w-3xl flex justify-start p-[20_0] text-blue-50">
        <nav className="flex flex-row gap-5">
          {navItem.map((item) => (
            <Link key={item.label} href={item.href}>{item.label}</Link>
          ))}
        </nav>
      </header>
      <div className="background absolute flex justify-center items-center overflow-hidden max-h-58 max-w-3xl rounded-2xl border-zinc-900 border">
        <img src="/bg.png" alt="" />
      </div>

      <div className="profile flex gap-3 items-center relative pt-44">
        <div className="flex w-32 h-32 rounded-3xl overflow-hidden border-zinc-800 border-2">
          <img src="/profile.jpg" alt="" />
        </div>
        <div className="flex flex-col gap-2"> 
          <span className="text-3xl flex items-center gap-2">rishav raj <img className="w-6 h-6" src="/trick.png" alt="" /></span>
          <span className="text-sm opacity-50 tracking-tighter">Full-Stack and AI Developer</span>
          <span className="text-xs opacity-55 flex items-center gap-1"><img className="h-5 w-4" src="/view.png" alt="" /><b>91 </b>profile View</span>
        </div>
      </div>

      <div className="bio p-[20px_0px] tracking-tighter">
        
        <span className="text-md opacity-80">Polymath and learner learning human things.</span><br />
        <span className="text-sm opacity-40">I use business analysis, product design, and engineering to build simple, personal tools.</span><br />
        <span className="text-sm opacity-40">Staying warm with coffee, chess, music, and sketching.</span><br />
      </div>
      
      <div>

      </div>

    </div>
  );
};
