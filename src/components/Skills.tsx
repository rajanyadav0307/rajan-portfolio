import { profile } from "../content/profile";

function Bar({ value }: { value: number }) {
  return (
    <div className="h-2 w-full rounded-full bg-white/10">
      <div
        className="h-2 rounded-full bg-gradient-to-r from-indigo-400 to-fuchsia-400"
        style={{ width: `${Math.max(0, Math.min(100, value))}%` }}
      />
    </div>
  );
}

export default function Skills() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {profile.skills.categories.map((c) => (
        <div key={c.name} className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-soft">
          <div className="text-base font-semibold">{c.name}</div>
          <div className="mt-4 space-y-4">
            {c.items.map((s) => (
              <div key={s.label}>
                <div className="flex items-center justify-between gap-3">
                  <div className="text-sm font-medium">{s.label}</div>
                  {typeof s.level === "number" ? (
                    <div className="text-xs text-white/55">{s.level}%</div>
                  ) : null}
                </div>
                {s.note ? <div className="mt-1 text-xs text-white/55">{s.note}</div> : null}
                {typeof s.level === "number" ? <div className="mt-2"><Bar value={s.level} /></div> : null}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
