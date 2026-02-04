import { Calendar, ExternalLink, Tag } from "lucide-react";
import { useMemo, useState } from "react";
import { profile } from "../content/profile";

export default function Blogs() {
  const [showAll, setShowAll] = useState(false);
  const itemsAll = useMemo(() => profile.blogs, []);
  const items = showAll ? itemsAll : itemsAll.slice(0, 4);

  return (
    <div className="space-y-4">
      {itemsAll.length > 4 ? (
        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => setShowAll((v) => !v)}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 hover:bg-white/10"
          >
            {showAll ? "Show fewer" : `Show all (${itemsAll.length})`}
          </button>
        </div>
      ) : null}

      <div className="grid gap-6 lg:grid-cols-2">
        {items.map((b) => (
          <a
            key={b.href}
            href={b.href}
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-white/10 bg-white/5 p-5 shadow-soft transition hover:bg-white/10"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="text-lg font-semibold">{b.title}</div>
              <ExternalLink size={18} className="text-white/50 transition group-hover:text-white/70" />
            </div>

            <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-white/60">
              <span className="inline-flex items-center gap-2">
                <Calendar size={14} /> {b.date}
              </span>
              <span className="inline-flex items-center gap-2">
                <Tag size={14} /> {b.tags.join(", ")}
              </span>
            </div>

            <p className="mt-3 text-sm text-white/75">{b.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
