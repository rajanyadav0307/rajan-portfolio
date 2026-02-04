import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function Section(props: { id: string; title: string; kicker?: string; children: ReactNode }) {
  return (
    <section id={props.id} className="relative mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:px-8">
      <div className="mb-8">
        {props.kicker ? (
          <div className="text-sm font-medium tracking-wide text-indigo-300/90">
            {props.kicker}
          </div>
        ) : null}
        <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
          {props.title}
        </h2>
        <div className="mt-3 h-px w-full bg-gradient-to-r from-white/10 via-white/5 to-transparent" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {props.children}
      </motion.div>
    </section>
  );
}
