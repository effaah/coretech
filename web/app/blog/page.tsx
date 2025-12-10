async function fetchServices() {
  const baseUrl = process.env.NEXT_PUBLIC_CMS_URL || "http://localhost:1337";

  const url = `${baseUrl}/api/services?sort=title:asc&pagination[pageSize]=100&populate=*`;

  const res = await fetch(url, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    console.error("Failed to fetch services:", res.status, res.statusText);
    return [];
  }

  const json = await res.json();
  return json.data ?? [];
}

export default async function HomePage() {
  const services = await fetchServices();

  return (
    <main className="bg-brand-white">
      {/* HERO – reduced height ~35% */}
      <section className="bg-hero-gradient text-white">
        <div className="max-w-7xl mx-auto px-6 py-14 md:py-18">
          <p className="uppercase tracking-[0.25em] text-brand-electric text-xs mb-3">
            Agile, Risk, Business Strategy, Product & Delivery Experts
          </p>

          <h1 className="text-4xl md:text-5xl font-bold max-w-3xl leading-tight">
            We love to build APIs
          </h1>

          <p className="text-white/80 mt-2 mb-8 text-lg">
            It’s a tech Gig
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="/contact"
              className="bg-brand-blue hover:bg-brand-electric transition text-white px-5 py-3 rounded-lg text-sm font-medium"
            >
              Book a discovery call
            </a>

            <a
              href="/services"
              className="border border-white/40 hover:border-white px-5 py-3 rounded-lg text-sm font-medium transition"
            >
              View services
            </a>
          </div>
        </div>
      </section>

      {/* PRACTICAL SUPPORT – padding −~15% */}
      <section className="bg-brand-soft py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-xl font-semibold text-brand-dark mb-3">
                Practical, outcome-focused support.
              </h2>
              <p className="text-brand-slate text-sm leading-relaxed">
                We focus on improving flow, alignment, and delivery — not just
                adding rituals and reports.
              </p>
            </div>
            <div>
              <ul className="space-y-2.5 text-brand-slate text-sm">
                <li>• Real-world delivery experience, not theory.</li>
                <li>• Coaching, consulting and training designed for your context.</li>
                <li>• Clear metrics so you see progress, not just hear about it.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* OUR COMPANY – padding −~20% */}
      <section className="bg-brand-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-brand-dark mb-2">
                Our Company
              </h2>
              <p className="text-brand-slate text-sm">Be Agile With Us!</p>
            </div>
            <div>
              <p className="text-brand-slate text-sm leading-relaxed mb-3">
                A young dynamic company founded in 2011 at Coretechs ICT. Our
                team has experience delivering IT solutions across Telecoms,
                Healthcare, Finance, Banking, and more.
              </p>
              <p className="text-brand-slate text-sm leading-relaxed mb-3">
                We provide innovative ideas and solutions at affordable cost.
                CoreTech Agile Limited is a premier provider of training in
                agile delivery, product strategy, and project management.
              </p>
              <a
                href="/about"
                className="text-brand-blue hover:text-brand-electric text-sm font-medium"
              >
                Learn more about us →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES – padding −~20%, tighter spacing */}
      <section className="bg-brand-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-brand-dark mb-2">
                Services
              </h2>
              <p className="text-brand-slate text-sm">
                Coaching, consulting and training designed to move the needle on
                delivery.
              </p>
            </div>
            <a
              href="/services"
              className="text-brand-blue hover:text-brand-electric text-sm font-medium"
            >
              View all services →
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {services.map((service: any) => (
              <a
                key={service.id}
                href={`/services/${service.code}`}
                className="bg-white border border-brand-border rounded-xl p-5 shadow-card hover:shadow-md hover:border-brand-blue transition block"
              >
                <p className="text-xs uppercase tracking-wide text-brand-blue mb-1.5">
                  {service.code}
                </p>
                <h3 className="text-brand-dark font-semibold mb-1.5">
                  {service.title}
                </h3>
                <p className="text-brand-slate text-sm line-clamp-3">
                  {service.shortDescription ?? ""}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
