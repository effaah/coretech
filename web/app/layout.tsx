import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CoreTech Agile Limited",
  description:
    "Modern, fast, secure, SEO-friendly website for CoreTech Agile Limited.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-gray-900 antialiased">
        <div className="flex min-h-screen flex-col">
          {/* Simple top nav */}
          <header className="border-b bg-white/80 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
              <a href="/" className="text-lg font-semibold tracking-tight">
                CoreTech <span className="text-sky-600">Agile</span>
              </a>
              <nav className="flex gap-6 text-sm text-gray-700">
                <a href="/services" className="hover:text-sky-600">
                  Services
                </a>
                {/* Add more links later: About, Blog, Contact, etc. */}
              </nav>
            </div>
          </header>

          {/* Page content */}
          <main className="flex-1">{children}</main>

          {/* Footer */}
          <footer className="border-t bg-white">
            <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
              <p>© {new Date().getFullYear()} CoreTech Agile Limited.</p>
              <p>Modern delivery · Secure systems · Practical outcomes.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
