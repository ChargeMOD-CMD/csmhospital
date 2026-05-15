import { Calendar } from "lucide-react";
import { Link } from "@tanstack/react-router";
import d1 from "@/assets/doctor-1.jpg";
import d2 from "@/assets/doctor-2.jpg";
import d3 from "@/assets/doctor-3.jpg";

const doctors = [
  { img: d1, name: "Dr. Arjun Mehta", role: "Cardiologist · 15 yrs", tag: "Heart & Vascular" },
  { img: d2, name: "Dr. Lena Hoffmann", role: "Neurologist · 12 yrs", tag: "Brain & Spine" },
  { img: d3, name: "Dr. Karan Singh", role: "Surgeon · 18 yrs", tag: "Robotic Surgery" },
];

export function Doctors() {
  return (
    <section className="relative py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--cyan-glow)]">Doctor Intelligence Grid</p>
          <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
            Meet the <span className="text-gradient">specialists</span> behind every breakthrough.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {doctors.map((d) => (
            <article
              key={d.name}
              className="glass group relative overflow-hidden rounded-3xl"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={d.img}
                  alt={d.name}
                  loading="lazy"
                  width={768}
                  height={1024}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute left-4 top-4 glass rounded-full px-3 py-1 text-[11px] text-foreground/90">
                  {d.tag}
                </div>
              </div>
              <div className="absolute inset-x-4 bottom-4 flex items-center justify-between">
                <div>
                  <h3 className="font-display text-lg font-semibold">{d.name}</h3>
                  <p className="text-xs text-muted-foreground">{d.role}</p>
                </div>
                <Link
                  to="/appointment"
                  className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-[var(--cyan-glow)] to-[var(--teal-glow)] text-primary-foreground glow-cyan transition-transform hover:scale-110"
                  aria-label={`Book ${d.name}`}
                >
                  <Calendar className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
