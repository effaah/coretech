"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

type StrapiService = {
  id: number;
  documentId?: string;
  code: string;
  title: string;
  shortDescription?: string;
  content?: any;
};

type FetchState =
  | { status: "loading" }
  | { status: "error"; message: string }
  | { status: "not-found" }
  | { status: "success"; service: StrapiService };

export default function ServiceDetailPage() {
  const params = useParams<{ code: string }>();
  const code = params?.code;

  const [state, setState] = useState<FetchState>({ status: "loading" });

  useEffect(() => {
    if (!code) return;

    const baseUrl =
      process.env.NEXT_PUBLIC_CMS_URL || "http://localhost:1337";

    const url = `${baseUrl}/api/services?filters[code][$eq]=${encodeURIComponent(
      String(code)
    )}&populate=*`;

    setState({ status: "loading" });

    fetch(url)
      .then(async (res) => {
        if (!res.ok) {
          throw new Error(`HTTP ${res.status} ${res.statusText}`);
        }
        const json = await res.json();
        const service = json.data?.[0] as StrapiService | undefined;
        if (!service) {
          setState({ status: "not-found" });
        } else {
          setState({ status: "success", service });
        }
      })
      .catch((err: any) => {
        setState({
          status: "error",
          message: err?.message ?? String(err),
        });
      });
  }, [code]);

  if (!code) {
    return (
      <main className="bg-brand-soft min-h-screen flex items-center justify-center">
        <p className="text-brand-slate text-sm">No service code provided.</p>
      </main>
    );
  }

  if (state.status === "loading") {
    return (
      <main className="bg-brand-soft min-h-screen flex items-center justify-center">
        <p className="text-brand-slate text-sm">Loading service…</p>
      </main>
    );
  }

  if (state.status === "error") {
    return (
      <main className="bg-brand-soft min-h-screen flex items-center justify-center px-6">
        <div className="max-w-md text-center">
          <h1 className="text-2xl font-semibold text-brand-dark mb-2">
            Error loading service
          </h1>
          <p className="text-brand-slate mb-2">
            There was a problem loading this service.
          </p>
          <p className="text-xs text-brand-slate/70">{state.message}</p>
        </div>
      </main>
    );
  }

  if (state.status === "not-found") {
    return (
      <main className="bg-brand-soft min-h-screen flex items-center justify-center px-6">
        <div className="max-w-md text-center">
          <h1 className="text-2xl font-semibold text-brand-dark mb-2">
            Service not found
          </h1>
          <p className="text-brand-slate text-sm">
            We couldn&apos;t find a service matching this URL.
          </p>
          <a
            href="/services"
            className="inline-block mt-4 text-sm text-brand-blue hover:text-brand-electric font-medium"
          >
            ← Back to all services
          </a>
        </div>
      </main>
    );
  }

  const { service } = state;
  const { title, shortDescription, content } = service;

  return (
    <main className="bg-brand-soft min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-14">

        {/* Breadcrumb */}
        <nav className="mb-6 text-xs text-brand-slate">
          <a href="/" className="hover:text-brand-blue">Home</a> /{" "}
          <a href="/services" className="hover:text-brand-blue">Services</a> /{" "}
          <span className="text-brand-dark">{title}</span>
        </nav>

        {/* Main card */}
        <article className="bg-brand-white border border-brand-border rounded-2xl shadow-card p-6 md:p-8">

          <h1 className="text-2xl md:text-3xl font-bold text-brand-dark mb-3">
            {title}
          </h1>

          {shortDescription && (
            <p className="text-sm text-brand-slate mb-6">
              {shortDescription}
            </p>
          )}

          {/* Body content */}
          <div className="space-y-3 text-sm text-brand-slate leading-relaxed">
            {Array.isArray(content) && content.length > 0 ? (
              content.map((block: any, index: number) => {
                if (block.type === "paragraph") {
                  const text =
                    block.children?.map((child: any) => child.text || "").join("") ||
                    "";
                  if (!text.trim()) return null;
                  return <p key={index}>{text}</p>;
                }
                return null;
              })
            ) : (
              <p>
                Detailed content for this service has not been added yet. Please
                contact us for more information.
              </p>
            )}
          </div>

          <div className="mt-8">
            <a
              href="/services"
              className="text-sm text-brand-blue hover:text-brand-electric font-medium"
            >
              ← Back to all services
            </a>
          </div>
        </article>
      </div>
    </main>
  );
}
