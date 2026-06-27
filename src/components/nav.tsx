import Link from "next/link";
import { usePathname } from "next/navigation";

const navItem = [
  { label: 'Home', href: "/" },
  // { label: 'About', href: "/about" },
  // { label: 'Blog', href: "/blog" },
];

export default function Nav() {
  return (
    <div>
      <header className="min-w-80 md:min-w-3xl lg:min-w-3xl flex justify-start p-[20_0] text-blue-50">
        <nav className="flex flex-row gap-5">
          {navItem.map((item) => (
            <Link key={item.label} href={item.href}>{item.label}</Link>
          ))}
        </nav>
      </header>
    </div>
  )
}
