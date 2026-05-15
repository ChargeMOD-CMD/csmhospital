import {
  Heart, Brain, Bone, Baby, Flower2, Sparkles, Ear, Siren,
  Activity, ScanLine, Dumbbell, Stethoscope,
} from "lucide-react";

const depts = [
  { i: Heart, n: "Cardiology" },
  { i: Brain, n: "Neurology" },
  { i: Bone, n: "Orthopedics" },
  { i: Baby, n: "Pediatrics" },
  { i: Flower2, n: "Gynecology" },
  { i: Sparkles, n: "Dermatology" },
  { i: Ear, n: "ENT" },
  { i: Siren, n: "Emergency Care" },
  { i: Activity, n: "ICU & Critical Care" },
  { i: ScanLine, n: "Radiology" },
  { i: Dumbbell, n: "Physiotherapy" },
  { i: Stethoscope, n: "General Medicine" },
];

export function Departments() {
  return (
    <section className="relative py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--cyan-glow)]">Smart Departments Universe</p>
            <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
              Interconnected <span className="text-gradient">medical ecosystems</span>.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Every department orbits a shared intelligence layer — patient records, AI
            assistance, and care teams move seamlessly with you.
          </p>
        </div>

        <div className="mt-14 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
          {depts.map(({ i: Icon, n }) => (
            <div
              key={n}
              className="glass group relative aspect-[5/4] rounded-2xl p-5 flex flex-col justify-between overflow-hidden transition-all hover:-translate-y-1 hover:glow-cyan"
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[var(--cyan-glow)]/10 blur-2xl transition-opacity opacity-0 group-hover:opacity-100" />
              <Icon className="h-7 w-7 text-[var(--cyan-glow)] transition-transform group-hover:scale-110" />
              <div>
                <div className="font-display text-base font-medium">{n}</div>
                <div className="mt-1 text-xs text-muted-foreground">Explore →</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
