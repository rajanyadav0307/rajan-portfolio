import { motion } from "framer-motion";
import { ArrowDown, FileText, GraduationCap, Mail, MapPin } from "lucide-react";
import IconLink from "./IconLink";
import { profile } from "../content/profile";

export default function Hero() {
  const mailto = profile.email ? `mailto:${profile.email}` : undefined;

  return (
    <header id="hero" className="relative overflow-hidden pt-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute top-24 left-1/4 h-[420px] w-[420px] rounded-full bg-fuchsia-500/15 blur-3xl" />
        <div className="absolute inset-0 gridfade opacity-30" />
        <div className="absolute inset-0 noise opacity-[0.14]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 pb-10 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
            <GraduationCap size={16} />
            <span>MS (AI Track) + Systems Software</span>
          </div>

          <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
            {profile.headline}
          </h1>

          <p className="mt-4 text-base leading-relaxed text-white/75 sm:text-lg">
            {profile.about.short}
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-white/65">
            <span className="inline-flex items-center gap-2">
              <MapPin size={16} /> {profile.location}
            </span>
            {profile.email ? (
              <a className="inline-flex items-center gap-2 hover:text-white" href={mailto}>
                <Mail size={16} /> {profile.email}
              </a>
            ) : null}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {profile.links.resume ? (
              <IconLink href={profile.links.resume} label="Resume">
                <FileText size={18} />
              </IconLink>
            ) : null}
            <IconLink href={profile.links.github} label="GitHub">
              <span className="h-4 w-4 rounded bg-white/70" />
            </IconLink>
            {profile.links.linkedin ? (
              <IconLink href={profile.links.linkedin} label="LinkedIn">
                <span className="h-4 w-4 rounded bg-indigo-300/80" />
              </IconLink>
            ) : null}
          </div>

          <a href="#about" className="mt-10 inline-flex items-center gap-2 text-sm text-white/70 hover:text-white">
            <ArrowDown size={16} /> Scroll
          </a>
        </motion.div>
      </div>
    </header>
  );
}
