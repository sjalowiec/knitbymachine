import React, { useEffect, useMemo, useState } from "react";

// Lightweight types
export type GlossaryEntry = {
  term: string;
  definition: string;
  tags?: string[];
  aka?: string[];
};

export type GlossaryProps = {
  /**
   * Provide entries directly. If omitted, component will try to fetch from Sanity
   * (requires projectId + dataset, and public read access OR a token passed to a server proxy).
   */
  entries?: GlossaryEntry[];

  /** Sanity project info for client-side fetch (public dataset only). */
  projectId?: string; // e.g., "x01v56io"
  dataset?: string;   // e.g., "production"
  apiVersion?: string; // default "2025-01-01"

  /** Optional custom GROQ if your field names differ. */
  groqQuery?: string;

  /**
   * If true, the alphabet jump bar (A–Z) will be shown when there are multiple starting letters.
   * Default: true
   */
  showAlphabet?: boolean;

  className?: string;
};

// Default GROQ handles common field names and portable text
const DEFAULT_GROQ = `
  *[_type in ["glossaryEntry","glossary"] || _type match "glossary*"]{
    "term": coalesce(term, title, name),
    "definition": coalesce(
      string(definition),
      pt::text(definition),
      pt::text(body),
      description,
      desc
    ),
    "tags": coalesce(tags[]->title, tags, categories[]->title, categories, []),
    "akaRaw": coalesce(aka, alsoKnownAs)
  } | order(term asc)
`;

function normalize(entries: any[]): GlossaryEntry[] {
  return (Array.isArray(entries) ? entries : [])
    .map((e) => {
      const aka = Array.isArray(e?.akaRaw)
        ? e.akaRaw.filter(Boolean).map(String)
        : e?.akaRaw
        ? [String(e.akaRaw)]
        : [];
      const tags = Array.isArray(e?.tags) ? e.tags.filter(Boolean).map(String) : [];
      return {
        term: String(e?.term || "").trim(),
        definition: String(e?.definition || "").trim(),
        tags,
        aka,
      } as GlossaryEntry;
    })
    .filter((e) => e.term && e.definition)
    .sort((a, b) => a.term.localeCompare(b.term));
}

export default function Glossary({
  entries,
  projectId,
  dataset,
  apiVersion = "2025-01-01",
  groqQuery = DEFAULT_GROQ,
  showAlphabet = true,
  className = "",
}: GlossaryProps) {
  const [fetched, setFetched] = useState<GlossaryEntry[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Client-side fetch from Sanity (works for public datasets).
  useEffect(() => {
    let cancelled = false;
    async function run() {
      if (entries?.length) return; // prefer provided entries
      if (!projectId || !dataset) return;
      try {
        const url = new URL(`https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}`);
        url.searchParams.set("query", groqQuery);
        const res = await fetch(url.toString());
        if (!res.ok) throw new Error(`Sanity fetch failed: ${res.status}`);
        const json = await res.json();
        const norm = normalize(json?.result || []);
        if (!cancelled) setFetched(norm);
      } catch (e: any) {
        if (!cancelled) setError(e?.message || "Failed to fetch glossary");
      }
    }
    run();
    return () => {
      cancelled = true;
    };
  }, [entries, projectId, dataset, apiVersion, groqQuery]);

  const data: GlossaryEntry[] = useMemo(() => {
    if (entries?.length) return normalize(entries);
    if (fetched?.length) return fetched;
    return [];
  }, [entries, fetched]);

  // UI state
  const [query, setQuery] = useState("");
  const [activeTags, setActiveTags] = useState<Set<string>>(new Set());

  const letters = useMemo(
    () => Array.from(new Set(data.map((e) => e.term.charAt(0).toUpperCase()))).sort(),
    [data]
  );

  const allTags = useMemo(
    () => Array.from(new Set(data.flatMap((e) => e.tags || []))).sort(),
    [data]
  );

  const filtered = useMemo(() => {
    const q = query.normalize("NFKD").toLowerCase();
    return data.filter((e) => {
      const term = e.term.toLowerCase();
      const aka = (e.aka || []).join("|").toLowerCase();
      const tags = (e.tags || []).map((t) => t.toLowerCase());
      const matchesQ = !q || term.includes(q) || aka.includes(q);
      const matchesTags = activeTags.size === 0 || tags.some((t) => activeTags.has(t));
      return matchesQ && matchesTags;
    });
  }, [data, query, activeTags]);

  const toggleTag = (t: string) => {
    setActiveTags((prev) => {
      const next = new Set(prev);
      const k = t.toLowerCase();
      if (next.has(k)) next.delete(k); else next.add(k);
      return next;
    });
  };

  return (
    <section className={className}>
      {/* Controls */}
      <div className="grid gap-4 md:grid-cols-[1fr_auto] items-end mb-6">
        <label className="block">
          <span className="block text-sm font-medium text-slate-700">Search</span>
          <input
            type="search"
            placeholder="Type to filter by term, AKA, definition…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10"
            aria-label="Search glossary"
          />
        </label>
        {allTags.length > 0 && (
          <details className="md:justify-self-end">
            <summary className="cursor-pointer select-none text-sm text-slate-600">Filter by tag</summary>
            <div className="mt-2 flex flex-wrap gap-2">
              {allTags.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => toggleTag(t)}
                  className={`rounded-full border border-slate-200 px-3 py-1 text-sm ${activeTags.has(t.toLowerCase()) ? "ring-2 ring-slate-300 bg-white" : "bg-slate-50 hover:bg-white"}`}
                >
                  {t}
                </button>
              ))}
            </div>
          </details>
        )}
      </div>

      {/* A–Z jump */}
      {showAlphabet && letters.length > 1 && (
        <nav className="sticky top-0 z-10 -mx-4 mb-4 border-y bg-white/90 backdrop-blur px-4 py-2">
          <ul className="flex flex-wrap gap-x-3 gap-y-1 text-sm text-slate-600">
            {letters.map((L) => (
              <li key={L}><a className="hover:underline" href={`#${L}`}>{L}</a></li>
            ))}
            <li className="text-slate-300">|</li>
            <li><a className="hover:underline" href="#top">Top</a></li>
          </ul>
        </nav>
      )}

      {/* Grid */}
      {error ? (
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-amber-800">
          <p className="font-medium">Couldn’t load glossary.</p>
          <p className="text-sm mt-1">{error}</p>
        </div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-16 text-slate-600">
          <p>No terms match your filters.</p>
          <p className="text-sm">Try adjusting your search or clearing tag filters.</p>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((e) => {
            const letter = e.term.charAt(0).toUpperCase();
            const id = e.term.toLowerCase().replace(/\s+/g, "-");
            return (
              <article key={id} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                {/* Letter header anchors */}
                <div id={letter} className="sr-only" aria-hidden="true" />
                <h2 id={id} className="text-xl font-semibold leading-tight flex items-center gap-2">
                  {e.term}
                  <a className="text-slate-400 text-sm opacity-0 hover:opacity-100 transition-opacity" href={`#${id}`} aria-label={`Link to ${e.term}`}>#</a>
                </h2>
                {e.aka && e.aka.length > 0 && (
                  <p className="mt-1 text-sm text-slate-500">Also known as: {e.aka.join(", ")}</p>
                )}
                <p className="mt-3 text-slate-800">{e.definition}</p>
                {e.tags && e.tags.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {e.tags.map((t) => (
                      <span key={t} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-700">{t}</span>
                    ))}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}
