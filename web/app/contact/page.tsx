export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-4xl px-6 py-14">
        <header className="mb-10">
          <p className="text-xs uppercase tracking-[0.25em] text-brand-electric mb-3">
            Contact Us
          </p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-navy mb-4">
            Get in touch
          </h1>
          <p className="text-gray-700 max-w-2xl">
            Whether you're exploring Agile transformation, product delivery, or
            technology strategy, we’d love to hear from you.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Section */}
          <div>
            <h2 className="text-xl font-semibold text-brand-navy mb-3">
              Contact Details
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Reach out anytime and a member of our team will follow up promptly.
            </p>

            <div className="space-y-3 text-sm">
              <p>
                <span className="font-medium text-brand-electric">Email:</span>{" "}
                connect@coretechagile.com
              </p>
              <p>
                <span className="font-medium text-brand-electric">
                  Registered Office:
                </span>{" "}
                (Add address if applicable)
              </p>
            </div>
          </div>

          {/* Right Section: Contact Form (non-functional for now) */}
          <form className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h2 className="text-xl font-semibold text-brand-navy mb-4">
              Send us a message
            </h2>

            <div className="grid gap-4 text-sm">
              <input
                type="text"
                placeholder="Your Name"
                className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-brand-electric outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-brand-electric outline-none"
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-brand-electric outline-none"
              ></textarea>

              <button
                type="submit"
                className="bg-brand-blue hover:bg-brand-electric text-white font-medium rounded-lg px-4 py-2 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
