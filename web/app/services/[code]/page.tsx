"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

type StrapiService = {
  id: number;
  documentId: string;
  code: string;
  title: string;
  shortDescription?: string;
  content?: any;
};

type FetchState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "error"; message: string }
  | { status: "not-found" }
  | { status: "success"; service: StrapiService };

export default function ServicePage() {
  const params = useParams<{ code: string }>();
  const code = params?.code;

  const [state, setState] = useState<FetchState>({ status: "idle" });

  useEffect(() => {
    if (!code) return;

    const baseUrl =
      process.env.NEXT_PUBLIC_CMS_URL || "http://localhost:1337";

    const url = `${baseUrl}/api/services?filters[code][$eq]=${code}&populate=*`;

    setState({ status: "loading" });

    fetch(url)
      .then(async (res) => {
        if (!res.ok) {
          throw new Error(`HTTP ${res.status} ${res.statusText}`);
        }
        const json = await res.json();
        const service: StrapiService | undefined = json.data?.[0];
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
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">No service code in URL.</p>
      </main>
    );
  }

  if (state.status === "idle" || state.status === "loading") {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Loading service…</p>
      </main>
    );
  }

  if (state.status === "error") {
    return (
      <main className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-md text-center">
          <h1 className="text-2xl font-semibold mb-2">
            Error loading service
          </h1>
          <p className="text-gray-600 mb-2">
            There was a problem loading this service.
          </p>
          <p className="text-xs text-gray-500">{state.message}</p>
        </div>
      </main>
    );
  }

  if (state.status === "not-found") {
    return (
      <main className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-md text-center">
          <h1 className="text-2xl font-semibold mb-2">Service not found</h1>
          <p className="text-gray-600">
            We couldn&apos;t find a service matching this URL.
          </p>
        </div>
      </main>
    );
  }

  const { service } = state;
  const { title, shortDescription, content } = service;

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-4xl px-4 py-10">
        <nav className="mb-6 text-xs text-gray-500">
          <a href="/" className="hover:text-sky-600">
            Home
          </a>{" "}
          /{" "}
          <a href="/services" className="hover:text-sky-600">
            Services
          </a>{" "}
          / <span className="text-gray-700">{service.code}</span>
        </nav>

        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <span className="mb-3 inline-flex items-center rounded-full bg-sky-50 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-sky-600">
            {service.code}
          </span>

          <h1 className="text-3xl font-bold mb-3 text-slate-900">
            {title}
          </h1>

          {shortDescription && (
            <p className="mb-6 text-base text-slate-700">
              {shortDescription}
            </p>
          )}

          <div className="prose max-w-none prose-p:text-slate-700">
            {Array.isArray(content) && content.length > 0 ? (
              content.map((block: any, index: number) => {
                if (block.type === "paragraph") {
                  const text =
                    block.children
                      ?.map((child: any) => child.text || "")
                      .join("") || "";
                  if (!text.trim()) return null;
                  return <p key={index}>{text}</p>;
                }
                return null;
              })
            ) : (
              <p className="text-gray-500">
                No detailed content has been added for this service yet.
              </p>
            )}
          </div>
        </article>
      </div>
    </main>
  );
}
