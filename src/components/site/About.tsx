import {
  Brain, HeartPulse, ShieldCheck, Stethoscope, Activity,
  Microscope, Users, Globe2,
} from "lucide-react";

const items = [
  { i: HeartPulse, t: "Advanced Healthcare Systems", d: "Integrated digital workflows from triage to recovery." },
  { i: ShieldCheck, t: "24/7 Emergency Care", d: "Always-on critical response with rapid escalation." },
  { i: Brain, t: "AI-Assisted Diagnostics", d: "Imaging, pathology and triage augmented by AI." },
  { i: Stethoscope, t: "Specialist Consultation", d: "World-class consultants across 40+ specialties." },
  { i: Activity, t: "Modern Operation Theatres", d: "Robotic-assisted, smart-monitored surgical suites." },
  { i: Users, t: "Patient-Centric Treatment", d: "Personalised care plans designed around you." },
  { i: Microscope, t: "Compassionate Support", d: "A care team that listens, explains, and stays close." },
  { i: Globe2, t: "International Standards", d: "Accredited facilities meeting global benchmarks." },
];

export function About() {
  return (
    <section className="relative py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--cyan-glow)]">About CSM Hospital</p>
          <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
            A new <span className="text-gradient">healing universe</span>, engineered for trust.
          </h2>
          <p className="mt-4 text-muted-foreground">
            CSM Hospital fuses next-generation medical technology with deeply human care.
            Every detail of our environment, from intelligent rooms to AI-assisted clinicians,
            is designed to help you heal faster and feel safer.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ i: Icon, t, d }) => (
            <div
              key={t}
              className="glass group relative overflow-hidden rounded-2xl p-5 transition-all hover:-translate-y-1 hover:bg-white/10"
            >
              <div className="mb-4 grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-[var(--cyan-glow)]/30 to-[var(--teal-glow)]/20 text-[var(--cyan-glow)]">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-base font-semibold">{t}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{d}</p>
              <div className="pointer-events-none absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-[var(--cyan-glow)]/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
