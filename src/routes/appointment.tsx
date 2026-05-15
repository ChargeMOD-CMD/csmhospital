import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Calendar, Clock, User, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/appointment")({
  head: () => ({
    meta: [
      { title: "Book Appointment — CSM Hospital" },
      { name: "description", content: "Book an appointment with CSM Hospital specialists in under a minute. AI-powered scheduling and smart symptom matching." },
      { property: "og:title", content: "Book Appointment — CSM Hospital" },
      { property: "og:description", content: "Smart appointment booking with AI suggestions and instant confirmation." },
    ],
  }),
  component: AppointmentPage,
});

function AppointmentPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="px-6 pt-32 pb-20">
      <div className="mx-auto max-w-4xl">
        <p className="text-xs uppercase tracking-[0.2em] text-[var(--cyan-glow)]">AI Appointment Portal</p>
        <h1 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
          Book your <span className="text-gradient">consultation</span>.
        </h1>
        <p className="mt-3 max-w-xl text-muted-foreground">
          Tell us a little about you and our AI will match you with the right specialist
          and the soonest available time.
        </p>

        {submitted ? (
          <div className="glass-strong mt-10 rounded-3xl p-10 text-center">
            <CheckCircle2 className="mx-auto h-12 w-12 text-[var(--teal-glow)]" />
            <h2 className="mt-4 font-display text-2xl font-semibold">Appointment received</h2>
            <p className="mt-2 text-muted-foreground">
              We've routed your request to our care team. You'll receive a confirmation
              shortly with your specialist and time.
            </p>
          </div>
        ) : (
          <form
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            className="glass-strong mt-10 grid gap-4 rounded-3xl p-6 md:p-8 sm:grid-cols-2"
          >
            <Field icon={User} label="Full name" placeholder="Your name" />
            <Field icon={User} label="Phone" placeholder="+91 ..." type="tel" />
            <Field icon={Calendar} label="Preferred date" type="date" />
            <Field icon={Clock} label="Preferred time" type="time" />
            <div className="sm:col-span-2">
              <label className="text-xs text-muted-foreground">Department</label>
              <select className="mt-1.5 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-[var(--cyan-glow)]">
                {["Cardiology","Neurology","Orthopedics","Pediatrics","Gynecology","Dermatology","ENT","General Medicine"].map(d => (
                  <option key={d} className="bg-background">{d}</option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="text-xs text-muted-foreground">Symptoms (optional)</label>
              <textarea
                rows={3}
                placeholder="Briefly describe what you're experiencing…"
                className="mt-1.5 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-[var(--cyan-glow)]"
              />
            </div>
            <button
              type="submit"
              className="sm:col-span-2 mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--cyan-glow)] to-[var(--teal-glow)] px-6 py-3 text-sm font-medium text-primary-foreground glow-cyan transition-transform hover:scale-[1.01]"
            >
              Confirm Appointment
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

function Field({
  icon: Icon, label, ...props
}: { icon: React.ComponentType<{ className?: string }>; label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="text-xs text-muted-foreground">{label}</span>
      <span className="mt-1.5 flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-3 py-2.5 focus-within:border-[var(--cyan-glow)]">
        <Icon className="h-4 w-4 text-[var(--cyan-glow)]" />
        <input {...props} className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground" />
      </span>
    </label>
  );
}
