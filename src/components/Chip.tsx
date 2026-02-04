import { cn } from "../lib/utils";

export default function Chip(props: { children: string; tone?: "default" | "indigo" }) {
  const tone = props.tone ?? "default";
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium",
        tone === "indigo"
          ? "border-indigo-400/20 bg-indigo-400/10 text-indigo-100"
          : "border-white/10 bg-white/5 text-zinc-100"
      )}
    >
      {props.children}
    </span>
  );
}
