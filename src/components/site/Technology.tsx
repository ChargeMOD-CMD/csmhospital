import { Cpu, ScanLine, Bot, FlaskConical, MonitorPlay, BarChart3 } from "lucide-react";
import dnaImg from "@/assets/dna-strand.jpg";

const tech = [
  { i: ScanLine, t: "MRI & CT Imaging", d: "Sub-millimeter precision with AI-enhanced reconstructions." },
  { i: Cpu, t: "AI Diagnostics", d: "Pattern detection across millions of cases in seconds." },
  { i: Bot, t: "Robotic Surgery", d: "Minimally-invasive procedures with surgeon-led precision." },
  { i: FlaskConical, t: "Advanced Lab", d: "Genomics, biomarker and pathology under one roof." },
  { i: MonitorPlay, t: "Smart Monitoring", d: "Live patient telemetry across every bed and room." },
  { i: BarChart3, t: "Health Analytics", d: "Personalised dashboards for every recovery journey." },
];

export function Technology() {
  return (
    <section className="relative py-28 px-6 overflow-hidden">
      <img
        src={dnaImg}
        alt=""
        aria-hidden
        loading="lazy"
        width={1024}
        height={1024}
        className="pointer-events-none absolute -right-24 top-1/2 -translate-y-1/2 h-[640px] w-[640px] opacity-40 mix-blend-screen"
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--cyan-glow)]">Medical Technology Galaxy</p>
          <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
            A constellation of <span className="text-gradient">intelligent machines</span>.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Every device in the hospital is part of a single, learning system —
            quietly working in service of your health.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {tech.map(({ i: Icon, t, d }) => (
            <div key={t} className="glass rounded-2xl p-6 transition-all hover:-translate-y-1">
              <Icon className="h-6 w-6 text-[var(--teal-glow)]" />
              <h3 className="mt-4 font-display text-lg font-semibold">{t}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
