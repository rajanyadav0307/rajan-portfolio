import type { ReactNode } from "react";

export default function IconLink(props: { href: string; children: ReactNode; label: string }) {
  return (
    <a
      href={props.href}
      target="_blank"
      rel="noreferrer"
      className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-100 shadow-soft transition hover:border-white/20 hover:bg-white/10"
      aria-label={props.label}
      title={props.label}
    >
      {props.children}
      <span className="text-sm">{props.label}</span>
      <span className="ml-1 text-white/40 transition group-hover:translate-x-0.5 group-hover:text-white/60">
        →
      </span>
    </a>
  );
}
