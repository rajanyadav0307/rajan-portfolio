import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Research from "./components/Research";
import Blogs from "./components/Blogs";
import OpenSource from "./components/OpenSource";
import Footer from "./components/Footer";
import { profile } from "./content/profile";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        <Hero />

        <Section id="about" title="About me" kicker="Overview">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-5 shadow-soft">
              <p className="text-base leading-relaxed text-white/75">{profile.about.short}</p>

              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-white/75">
                {profile.about.bullets.map((b, idx) => (
                  <li key={idx}>{b}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-soft">
              <div className="text-sm font-semibold">Quick facts</div>
              <dl className="mt-4 space-y-3 text-sm text-white/70">
                <div>
                  <dt className="text-white/50">Focus</dt>
                  <dd>Systems performance + AI productization</dd>
                </div>
                <div>
                  <dt className="text-white/50">Open to</dt>
                  <dd>Internships / New Grad / SWE / ML Systems</dd>
                </div>
                <div>
                  <dt className="text-white/50">Location</dt>
                  <dd>{profile.location}</dd>
                </div>
              </dl>
              <div className="mt-5 text-xs text-white/55">
                Tip: Edit everything in <span className="font-mono text-white/70">src/content/profile.ts</span>.
              </div>
            </div>
          </div>
        </Section>

        <Section id="experience" title="Work experience" kicker="Impact, ownership, results">
          <Experience />
        </Section>

        <Section id="skills" title="Skills" kicker="What I’m strong at">
          <Skills />
        </Section>

        <Section id="oss" title="Open-source contributions" kicker="PRs, status, and impact">
          <OpenSource />
        </Section>

        <Section id="projects" title="Projects" kicker="Things I’ve built">
          <Projects />
        </Section>

        <Section id="research" title="Research" kicker="AI track work + publications">
          <Research />
        </Section>

        <Section id="blogs" title="Blogs" kicker="Writing">
          <Blogs />
        </Section>
      </main>

      <Footer />
    </div>
  );
}
