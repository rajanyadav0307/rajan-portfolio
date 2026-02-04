import { ExternalLink, GitPullRequest, CheckCircle2, Clock, XCircle, Pencil } from "lucide-react";
import { profile, type PRStatus } from "../content/profile";
import { useMemo, useState } from "react";
import Chip from "./Chip";
import Reveal from "./Reveal";

function StatusPill({ status }: { status: PRStatus }) {
  const map: Record<PRStatus, { label: string; icon: any; cls: string }> = {
    "Merged": { label: "Merged", icon: CheckCircle2, cls: "border-emerald-400/20 bg-emerald-400/10 text-emerald-100" },
    "Under Review": { label: "Under Review", icon: Clock, cls: "border-amber-400/20 bg-amber-400/10 text-amber-100" },
    "Draft": { label: "Draft", icon: Pencil, cls: "border-indigo-400/20 bg-indigo-400/10 text-indigo-100" },
    "Closed": { label: "Closed", icon: XCircle, cls: "border-rose-400/20 bg-rose-400/10 text-rose-100" },
  };
  const m = map[status];
  const Icon = m.icon;
  return (
    <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium ${m.cls}`}>
      <Icon size={14} />
      {m.label}
    </span>
  );
}

function StatusCounts({ prs }: { prs: { status: PRStatus }[] }) {
  const counts = useMemo(() => {
    const c: Record<PRStatus, number> = { "Merged": 0, "Under Review": 0, "Draft": 0, "Closed": 0 };
    for (const pr of prs) c[pr.status] += 1;
    return c;
  }, [prs]);

  const row = [
    counts["Merged"] ? `✅ ${counts["Merged"]} merged` : null,
    counts["Under Review"] ? `🕒 ${counts["Under Review"]} under review` : null,
    counts["Draft"] ? `✍️ ${counts["Draft"]} draft` : null,
    counts["Closed"] ? `⛔ ${counts["Closed"]} closed` : null,
  ].filter(Boolean);

  return <div className="mt-2 text-xs text-white/60">{row.join(" · ")}</div>;
}

export default function OpenSource() {
  // Keep the section readable: each repo shows top PRs, expand for full list.
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  return (
    <div className="space-y-8">
      {profile.openSource.map((c) => {
        const isOpen = !!expanded[c.project];
        const top = c.prs.slice(0, 2);
        const rest = c.prs.slice(2);
        const hasMore = rest.length > 0;

        return (
          <div key={c.project} className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-soft">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0">
                <div className="text-lg font-semibold">{c.project}</div>
                <div className="mt-1 text-sm text-white/70">
                  {c.role ? `${c.role} · ` : ""}{c.summary}
                </div>
                <StatusCounts prs={c.prs} />
              </div>

              {c.links?.length ? (
                <div className="flex flex-wrap gap-2">
                  {c.links.map((l) => (
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

            {c.tech?.length ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {c.tech.map((t) => (
                  <Chip key={t} tone="indigo">{t}</Chip>
                ))}
              </div>
            ) : null}

            {/* Compact PR preview */}
            <div className="mt-6">
              <div className="text-sm font-medium text-white/70">Top PRs</div>
              <div className="mt-3 grid gap-4 lg:grid-cols-2">
                {top.map((pr) => (
                  <div key={pr.href} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 text-sm font-semibold">
                          <GitPullRequest size={16} className="text-white/70" />
                          <span className="truncate">{pr.title}</span>
                        </div>
                        <div className="mt-1 text-xs text-white/60">
                          {pr.repo}{pr.number ? ` · #${pr.number}` : ""}
                        </div>
                      </div>
                      <StatusPill status={pr.status} />
                    </div>

                    {pr.impact ? <div className="mt-3 text-sm text-white/75">{pr.impact}</div> : null}

                    {pr.metrics?.length ? (
                      <ul className="mt-3 list-disc space-y-1 pl-5 text-xs text-white/65">
                        {pr.metrics.slice(0, 2).map((m, idx) => (
                          <li key={idx}>{m}</li>
                        ))}
                      </ul>
                    ) : null}

                    <a
                      href={pr.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 hover:bg-white/10"
                    >
                      <ExternalLink size={14} /> View
                    </a>
                  </div>
                ))}
              </div>

              {hasMore ? (
                <button
                  type="button"
                  onClick={() => setExpanded((m) => ({ ...m, [c.project]: !m[c.project] }))}
                  className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 hover:bg-white/10"
                >
                  {isOpen ? "Hide all PRs" : `Show all PRs (${c.prs.length})`}
                </button>
              ) : null}

              {/* Full list (only when expanded) */}
              {isOpen ? (
                <div className="mt-4">
                  <div className="text-sm font-medium text-white/70">All PRs</div>
                  <div className="mt-3 grid gap-4 lg:grid-cols-2">
                    {c.prs.map((pr) => (
                      <div key={pr.href} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0">
                            <div className="flex items-center gap-2 text-sm font-semibold">
                              <GitPullRequest size={16} className="text-white/70" />
                              <span className="truncate">{pr.title}</span>
                            </div>
                            <div className="mt-1 text-xs text-white/60">
                              {pr.repo}{pr.number ? ` · #${pr.number}` : ""}
                            </div>
                          </div>
                          <StatusPill status={pr.status} />
                        </div>

                        {pr.impact ? <div className="mt-3 text-sm text-white/75">{pr.impact}</div> : null}

                        {pr.metrics?.length ? (
                          <ul className="mt-3 list-disc space-y-1 pl-5 text-xs text-white/65">
                            {pr.metrics.map((m, idx) => (
                              <li key={idx}>{m}</li>
                            ))}
                          </ul>
                        ) : null}

                        {pr.tags?.length ? (
                          <div className="mt-3 flex flex-wrap gap-2">
                            {pr.tags.map((t) => (
                              <Chip key={t}>{t}</Chip>
                            ))}
                          </div>
                        ) : null}

                        <a
                          href={pr.href}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 hover:bg-white/10"
                        >
                          <ExternalLink size={14} /> View
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}
