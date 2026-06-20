import Link from "next/link";

import { FaGithub, FaLinkedin, } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const navlink =[
  {label: 'github', href: "https://github.com/rishavvrajj", icon: <FaGithub size={25} />},
  {label: 'linkedin', href: "https://www.linkedin.com/in/rishavv-rajj/", icon: <FaLinkedin size={25} />},
  {label: 'twitter', href: "https://x.com/rishavvrajj", icon: <FaSquareXTwitter size={25} />},
];

export default function Fotter() {
  return (
    <div>
      <div className="flex flex-col justify-center min-h-20 border-t-2 border-zinc-700">
        <div className="flex justify-between items-center text-sm">
          <div className="opacity-50"><span>rishav raj</span><br />Still learning, still building, still growing.</div>
          <div className="flex gap-5">
            {navlink.map((item) => (
              <Link target="_blank" key={item.label} href={item.href}>{item.icon}</Link>
            ))}
          </div>
        </div>
      </div>

      <div className="text-sm opacity-50 p-[20px_0px] border-t-2 border-zinc-700">
        @ 2026 rishav raj
      </div>
    </div>
  )
}
