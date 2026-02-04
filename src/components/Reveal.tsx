import { ChevronDown, ChevronUp } from "lucide-react";
import { useState, type ReactNode } from "react";

export default function Reveal(props: {
  summary?: ReactNode;
  children: ReactNode;
  defaultOpen?: boolean;
  moreLabel?: string;
  lessLabel?: string;
  className?: string;
}) {
  const [open, setOpen] = useState(!!props.defaultOpen);

  return (
    <div className={props.className}>
      {props.summary ? <div>{props.summary}</div> : null}

      {open ? <div className={props.summary ? "mt-3" : ""}>{props.children}</div> : null}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 hover:bg-white/10"
      >
        {open ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        {open ? (props.lessLabel ?? "Show less") : (props.moreLabel ?? "Show more")}
      </button>
    </div>
  );
}
