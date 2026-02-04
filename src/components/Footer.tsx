import { profile } from "../content/profile";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-zinc-950/60">
      <div className="mx-auto max-w-6xl px-5 py-10 text-sm text-white/60 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            © {new Date().getFullYear()} {profile.name}. Built with React + Tailwind.
          </div>
          <div className="flex flex-wrap gap-4">
            <a className="hover:text-white" href={profile.links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            {profile.links.linkedin ? (
              <a className="hover:text-white" href={profile.links.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </footer>
  );
}
