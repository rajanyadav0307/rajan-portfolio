import { ExternalLink } from "lucide-react";
import { profile } from "../content/profile";
import Chip from "./Chip";
import Reveal from "./Reveal";
import { formatMonthYear } from "../lib/utils";

export default function Experience() {
  return (
    <div className="grid gap-6">
      {profile.experience.map((e) => {
        const short = e.highlights.slice(0, 2);
        const rest = e.highlights.slice(2);
        const hasMore = rest.length > 0;

        return (
          <div
            key={`${e.company}-${e.role}-${e.start}`}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-soft"
          >
            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
              <div>
                <div className="text-lg font-semibold">
                  {e.role} <span className="text-white/60">·</span> {e.company}
                </div>
                <div className="mt-1 text-sm text-white/60">
                  {e.location ? `${e.location} · ` : ""}
                  {formatMonthYear(e.start)} — {formatMonthYear(e.end)}
                </div>
              </div>

              {e.links?.length ? (
                <div className="flex flex-wrap gap-2">
                  {e.links.map((l) => (
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

            {e.tags?.length ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {e.tags.map((t) => (
                  <Chip key={t} tone="indigo">{t}</Chip>
                ))}
              </div>
            ) : null}

            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-white/75">
              {short.map((h, idx) => (
                <li key={idx}>{h}</li>
              ))}
            </ul>

            {hasMore ? (
              <Reveal
                moreLabel={`Show ${rest.length} more`}
                lessLabel="Hide details"
                className="mt-1"
              >
                <ul className="list-disc space-y-2 pl-5 text-sm text-white/75">
                  {rest.map((h, idx) => (
                    <li key={idx}>{h}</li>
                  ))}
                </ul>
              </Reveal>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
