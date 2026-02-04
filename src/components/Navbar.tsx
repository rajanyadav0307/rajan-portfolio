import { useEffect, useMemo, useState } from "react";
import { Github, Linkedin, Moon, Sun } from "lucide-react";
import { toggleTheme, currentTheme } from "../lib/theme";
import { profile } from "../content/profile";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "oss", label: "Open Source" },
  { id: "projects", label: "Projects" },
  { id: "research", label: "Research" },
  { id: "blogs", label: "Blogs" },
];

export default function Navbar() {
  const [theme, setTheme] = useState<"dark" | "light">(currentTheme());

  useEffect(() => {
    const onScroll = () => {
      const el = document.getElementById("topbar");
      if (!el) return;
      el.classList.toggle("bg-zinc-950/70", window.scrollY > 8);
      el.classList.toggle("backdrop-blur", window.scrollY > 8);
      el.classList.toggle("border-white/10", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const github = useMemo(() => profile.links.github, []);
  const linkedin = useMemo(() => profile.links.linkedin, []);

  return (
    <div id="topbar" className="fixed inset-x-0 top-0 z-50 border-b border-transparent transition">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-6 lg:px-8">
        <a href="#hero" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-indigo-400 to-fuchsia-400" />
          <div className="leading-tight">
            <div className="text-sm font-semibold">{profile.name}</div>
            <div className="text-xs text-white/60">Systems + AI</div>
          </div>
        </a>

        <nav className="hidden items-center gap-5 text-sm text-white/70 md:flex">
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="hover:text-white">
              {s.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10"
            onClick={() => setTheme(toggleTheme() as any)}
            aria-label="Toggle theme"
            title="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {linkedin ? (
            <a
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10"
              href={linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          ) : null}

          <a
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10"
            href={github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            title="GitHub"
          >
            <Github size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}
