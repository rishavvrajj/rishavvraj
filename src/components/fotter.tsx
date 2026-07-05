import Link from "next/link";

import { FaGithub, FaLinkedin, } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const navlink =[
  {label: 'github', href: "https://github.com/rishavvrajj", icon: FaGithub},
  {label: 'linkedin', href: "https://www.linkedin.com/in/rishavv-rajj/", icon: FaLinkedin},
  {label: 'twitter', href: "https://x.com/rishavvrajj", icon: FaSquareXTwitter},
];

export default function Fotter() {
  return (
    <div className="text-blue-50">
      <div className="flex flex-col justify-center min-h-20 border-t-2 border-zinc-700">
        <div className="flex justify-between items-center text-[10px] md:text-xs lg:text-sm ">
          <div className="opacity-50"><span>rishav raj</span><br />Still learning, still building, still growing.</div>
          <div className="flex gap-5">
            {navlink.map((item) => {
              const Icon = item.icon;
              return (
              <Link target="_blank" key={item.label} href={item.href}><Icon className="size-4 md:size-5 lg:size-6" /></Link>
              )})}
          </div>
        </div>
      </div>

      <div className="flex justify-between text-[10px] md:text-xs lg:text-sm opacity-50 p-[20px_0px] border-t-2 border-zinc-700">
        <span>@ 2026 rishav raj</span>
        <span>Poison, Fear, Silence.</span>
      </div>
    </div>
  )
}
