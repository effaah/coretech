export default function HomePage() {
  return (
    <main className="min-h-screen px-4 py-16 mx-auto max-w-5xl">
      <section className="mb-12">
        <p className="text-sm uppercase tracking-[0.2em] text-sky-500 mb-3">
          CoreTech Agile Limited
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
          Modern, reliable software delivery for your business.
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl">
          This is a work-in-progress redesign of the CoreTech Agile website.
          Explore our services while we complete the full experience.
        </p>
      </section>

      <section>
        <a
          href="/services"
          className="inline-flex items-center px-5 py-3 rounded-full border border-sky-500 text-sky-600 text-sm font-medium hover:bg-sky-50 transition"
        >
          View our services
        </a>
      </section>
    </main>
  );
}


