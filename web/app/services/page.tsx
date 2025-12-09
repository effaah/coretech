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
    console.error(
      "Failed to fetch services from Strapi:",
      res.status,
      res.statusText,
    );
    return [];
  }

  const json = await res.json();
  const services: StrapiService[] = json.data ?? [];
  return services;
}

export default async function ServicesPage() {
  const services = await fetchAllServices();

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <header className="mb-10">
          <p className="text-xs uppercase tracking-[0.25em] text-sky-500 mb-3">
            Services
          </p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            What we can do for you
          </h1>
          <p className="text-gray-700 max-w-2xl">
            Explore the capabilities and services offered by CoreTech Agile
            across delivery, engineering, and advisory.
          </p>
        </header>

        {services.length === 0 ? (
          <p className="text-gray-500">
            No services have been published yet. Add some in Strapi to see them
            listed here.
          </p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <a
                key={service.id}
                href={`/services/${service.code}`}
                className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-sky-400/70 hover:shadow-md"
              >
                <span className="mb-2 inline-flex items-center rounded-full bg-sky-50 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-sky-600">
                  {service.code}
                </span>
                <h2 className="mb-2 text-lg font-semibold text-slate-900 group-hover:text-sky-700">
                  {service.title}
                </h2>
                {service.shortDescription && (
                  <p className="mb-4 text-sm text-slate-600 line-clamp-3">
                    {service.shortDescription}
                  </p>
                )}
                <span className="mt-auto text-xs font-medium text-sky-600 group-hover:text-sky-700">
                  View details →
                </span>
              </a>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
