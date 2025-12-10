// app/services/page.tsx

type StrapiService = {
  id: number;
  documentId: string;
  code: string;
  title: string;
  shortDescription?: string;
};

async function fetchAllServices(): Promise<StrapiService[]> {
  const baseUrl = process.env.NEXT_PUBLIC_CMS_URL || "http://localhost:1337";

  const url = `${baseUrl}/api/services?sort=title:asc&pagination[pageSize]=100`;

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

export default async function ServicesPage() {
  const services = await fetchAllServices();

  return (
    <main className="min-h-screen bg-brand-white">
      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* Section Header */}
        <header className="mb-12">
          <p className="text-xs uppercase tracking-[0.25em] text-brand-blue mb-3">
            Services
          </p>

          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-dark mb-4">
            What we can do for you
          </h1>

          <p className="text-brand-slate max-w-2xl text-sm leading-relaxed">
            CoreTech Agile supports teams across delivery, engineering and product — 
            from advisory and coaching through to hands-on execution.
          </p>
        </header>

        {/* Services Grid */}
        {services.length === 0 ? (
          <p className="text-brand-slate">
            No services are available yet. Please check back later.
          </p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <a
                key={service.id}
                href={`/services/${service.code}`}
                className="group block bg-white border border-brand-border rounded-xl p-6 shadow-card 
                           hover:shadow-md hover:border-brand-blue transition"
              >
                {/* Code Tag */}
                <p className="text-xs uppercase tracking-wide text-brand-blue mb-2">
                  {service.code}
                </p>

                {/* Title */}
                <h2 className="text-lg font-semibold text-brand-dark mb-2 group-hover:text-brand-blue transition">
                  {service.title}
                </h2>

                {/* Description */}
                {service.shortDescription && (
                  <p className="text-sm text-brand-slate line-clamp-3">
                    {service.shortDescription}
                  </p>
                )}

                {/* CTA */}
                <p className="mt-4 text-xs text-brand-blue font-medium group-hover:text-brand-electric transition">
                  View details →
                </p>
              </a>
            ))}
          </div>
        )}

      </div>
    </main>
  );
}
