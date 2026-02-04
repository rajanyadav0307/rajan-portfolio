import { ExternalLink, Star } from "lucide-react";
import { useMemo, useState } from "react";
import { profile } from "../content/profile";
import Chip from "./Chip";
import Reveal from "./Reveal";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  const featured = useMemo(() => profile.projects.filter((p) => p.featured), []);
  const restAll = useMemo(() => profile.projects.filter((p) => !p.featured), []);
  const rest = showAll ? restAll : restAll.slice(0, 2);

  const render = (p: typeof profile.projects[number]) => (
    <div
      key={p.name}
      className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-soft"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex items-center gap-2 text-lg font-semibold">
            {p.featured ? <Star size={18} className="text-indigo-300" /> : null}
            <span className="truncate">{p.name}</span>
          </div>
          <div className="mt-1 text-sm text-white/65">{p.description}</div>
        </div>

        {p.links?.length ? (
          <div className="flex flex-wrap justify-end gap-2">
            {p.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 hover:bg-white/10"
              >
                <ExternalLink size={14} /> {l.label}
              </a>
            ))}
          </div>
        ) : null}
      </div>

      {/* Keep readability: show top 2 highlights, expand for more */}
      <div className="mt-4">
        <ul className="list-disc space-y-2 pl-5 text-sm text-white/75">
          {p.highlights.slice(0, 2).map((h, idx) => (
            <li key={idx}>{h}</li>
          ))}
        </ul>

        {p.highlights.length > 2 ? (
          <Reveal moreLabel={`Show ${p.highlights.length - 2} more`} lessLabel="Hide details">
            <ul className="list-disc space-y-2 pl-5 text-sm text-white/75">
              {p.highlights.slice(2).map((h, idx) => (
                <li key={idx}>{h}</li>
              ))}
            </ul>
          </Reveal>
        ) : null}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {p.tech.map((t) => (
          <Chip key={t}>{t}</Chip>
        ))}
      </div>
    </div>
  );

  return (
    <div className="space-y-10">
      {featured.length ? (
        <div className="space-y-4">
          <div className="text-sm font-medium text-white/70">Featured</div>
          <div className="grid gap-6 lg:grid-cols-2">{featured.map(render)}</div>
        </div>
      ) : null}

      <div className="space-y-4">
        <div className="flex items-center justify-between gap-3">
          <div className="text-sm font-medium text-white/70">More</div>

          {restAll.length > 2 ? (
            <button
              type="button"
              onClick={() => setShowAll((v) => !v)}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 hover:bg-white/10"
            >
              {showAll ? "Show fewer" : `Show all (${restAll.length})`}
            </button>
          ) : null}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">{rest.map(render)}</div>
      </div>
    </div>
  );
}
