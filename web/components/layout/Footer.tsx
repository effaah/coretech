import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-brand-slate mt-16">
      <div className="max-w-6xl mx-auto px-6 py-10 grid gap-8 md:grid-cols-4">
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
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 text-xs text-center py-4 text-brand-slate">
        © {new Date().getFullYear()} CoreTech Agile Limited. All rights
        reserved.
      </div>
    </footer>
  );
}
