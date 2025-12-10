"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Services", href: "/services" },
  { label: "Training", href: "/training" },
  { label: "Consulting", href: "/consulting" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const rawPathname = usePathname();
  const pathname = rawPathname ?? "/";

  return (
    <header className="bg-brand-navy text-white">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
        <Link href="/" className="font-semibold text-lg whitespace-nowrap">
          CoreTech <span className="text-brand-electric">Agile</span> Limited
        </Link>

        <nav className="hidden md:flex gap-6 text-sm">
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`hover:text-brand-electric transition ${
                  active ? "text-brand-electric" : ""
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className="hidden md:inline-flex bg-brand-blue hover:bg-brand-electric text-white px-4 py-2 rounded-lg text-sm font-medium transition"
        >
          Contact
        </Link>
      </div>
    </header>
  );
}
