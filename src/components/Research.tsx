import { ExternalLink } from "lucide-react";
import { useMemo, useState } from "react";
import { profile } from "../content/profile";
import Chip from "./Chip";

export default function Research() {
  const [showAll, setShowAll] = useState(false);
  const itemsAll = useMemo(() => profile.research, []);
  const items = showAll ? itemsAll : itemsAll.slice(0, 2);

  return (
    <div className="space-y-4">
      {itemsAll.length > 2 ? (
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
        {items.map((r) => (
          <div key={r.title} className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-soft">
            <div className="text-lg font-semibold">{r.title}</div>
            <div className="mt-1 flex flex-wrap gap-2 text-xs text-white/60">
              {r.venue ? <Chip tone="indigo">{r.venue}</Chip> : null}
              {r.year ? <Chip>{r.year}</Chip> : null}
            </div>
            <p className="mt-3 text-sm text-white/75">{r.summary}</p>

            {r.links?.length ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {r.links.map((l) => (
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
        ))}
      </div>
    </div>
  );
}
