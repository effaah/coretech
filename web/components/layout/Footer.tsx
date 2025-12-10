// components/layout/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-brand-slate mt-16">
      <div className="max-w-7xl mx-auto px-6 py-9 grid gap-6 md:grid-cols-4">
        <div>
          <div className="font-semibold text-white mb-2">
            CoreTech Agile Limited
          </div>
          <p className="text-sm">
            Agile, product and delivery consulting for organisations that need
            real outcomes.
          </p>
        </div>

        <div>
          <div className="text-white font-medium mb-2 text-sm">Services</div>
          <ul className="space-y-1 text-sm">
            <li>
              <Link href="/services" className="hover:text-brand-electric">
                Overview
              </Link>
            </li>
            <li>
              <Link
                href="/services/agile-coaching"
                className="hover:text-brand-electric"
              >
                Agile Coaching
              </Link>
            </li>
            <li>
              <Link
                href="/services/product-delivery"
                className="hover:text-brand-electric"
              >
                Product &amp; Delivery
              </Link>
            </li>
            <li>
              <Link
                href="/services/training-workshops"
                className="hover:text-brand-electric"
              >
                Training &amp; Workshops
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <div className="text-white font-medium mb-2 text-sm">Company</div>
          <ul className="space-y-1 text-sm">
            <li>
              <Link href="/about" className="hover:text-brand-electric">
                About
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-brand-electric">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <div className="text-white font-medium mb-2 text-sm">Contact</div>
          <p className="text-sm">
            Email:{" "}
            <span className="text-brand-electric">
              connect@coretechagile.com
            </span>
            <br />
              Mobile:{" "}<span className="text-brand-electric">
                +233 262610089
              </span>
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 text-xs text-center py-3 text-brand-slate">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-2">
          <span>
            © {new Date().getFullYear()} CoreTech Agile Limited. All rights
            reserved.
          </span>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy-policy"
              className="hover:text-brand-electric"
            >
              Privacy Policy
            </Link>
            <span className="text-white/20">|</span>
            <Link href="/terms" className="hover:text-brand-electric">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
