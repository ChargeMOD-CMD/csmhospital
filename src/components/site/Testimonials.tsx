import { Quote } from "lucide-react";

const stories = [
  {
    q: "From admission to recovery, every interaction felt designed with care. The technology is incredible — but it's the people that healed me.",
    n: "Priya S.", r: "Cardiac patient",
  },
  {
    q: "The AI triage flagged my symptoms in minutes. I had a specialist on the line before I even reached the ER.",
    n: "Daniel K.", r: "Emergency case",
  },
  {
    q: "I watched my daughter's recovery on the smart room screen. Felt like the future of parenting in healthcare.",
    n: "Anita R.", r: "Pediatric family",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--cyan-glow)]">Healing Patient Experience</p>
          <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
            Stories from our <span className="text-gradient">gratitude wall</span>.
          </h2>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {stories.map((s) => (
            <figure key={s.n} className="glass rounded-3xl p-6">
              <Quote className="h-6 w-6 text-[var(--cyan-glow)]" />
              <blockquote className="mt-4 text-sm leading-relaxed text-foreground/90">
                "{s.q}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[var(--cyan-glow)] to-[var(--teal-glow)]" />
                <div>
                  <div className="text-sm font-medium">{s.n}</div>
                  <div className="text-xs text-muted-foreground">{s.r}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
