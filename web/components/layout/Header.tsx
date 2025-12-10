"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Training", href: "/training" },
  { label: "Events & Media", href: "/events" },
  { label: "Blog", href: "/blog" },
];

export default function Header() {
  const pathname = usePathname() ?? "/";

  return (
    <header className="bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg tracking-tight">
          CoreTech <span className="text-brand-electric">Agile</span> Limited
        </Link>

        <nav className="hidden md:flex gap-8 text-sm">
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition ${
                  active
                    ? "text-brand-blue"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className="hidden md:inline-flex bg-brand-blue hover:bg-brand-electric transition text-white px-4 py-2 rounded-lg text-sm font-medium"
        >
          Contact
        </Link>
      </div>
    </header>
  );
}
